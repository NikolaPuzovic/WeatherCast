import { createContext, useContext, useState, useEffect } from 'react';

// UTILITY FUNCTIONS

import setCurrentLocation from '../utility/setCurrentLocation';
import checkForError from '../utility/checkForError';
import parseJson from '../utility/parseJson';
import getLocation from '../utility/getLocation';


const WeatherContext = createContext(null);

export const WeatherDataProvider = ({children}) => {

    const [coordinates, setCoordinates] = useState(null);
    const [weatherData, setWeatherData] = useState({});
    const [locationData, setLocationData] = useState(null);

    const errorMessage = 'Access to your location is not possible as the location feature is not enabled. To continue, go to settings and grant location access for our app.';

    useEffect(() => {
        getLocation(
            (coordsObj) => setCurrentLocation(coordsObj, setCoordinates),
            () => alert(errorMessage)
        );
    }, []);

    useEffect(() => {
        if(coordinates) {
            const currentWeatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lon}&current=temperature_2m,relative_humidity_2m,weather_code,pressure_msl,wind_speed_10m,wind_direction_10m&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;

            const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coordinates.lat}&longitude=${coordinates.lon}&localityLanguage=en`;
    
            Promise.all([
                fetch(currentWeatherUrl),
                fetch(locationUrl)
            ])
            .then(responses => responses.map(response => checkForError(response)))
            .then(dataArray => Promise.all(dataArray.map(data => parseJson(data))))
            .then(parsedData => {
                const [weatherData, locationData] = parsedData;

                setWeatherData(weatherData);
                setLocationData(locationData);
            })
            .catch(error => alert(error));
        }
    }, [coordinates]);
    

    return (
        <WeatherContext.Provider
            value={{weatherData, locationData, setCoordinates}}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeatherData = () => {
    const context = useContext(WeatherContext);

    if(!context) {
        throw new Error(`useWeatherData must be used within a WeatherDataProvider`);
    }
    return context;
};