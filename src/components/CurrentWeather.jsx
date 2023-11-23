// COMPONENTS

import Card from './Card';
import Icon from './Icon';
import Text from './Text';
import ValueUnit from './ValueUnit';
import MinMaxTemp from './MinMaxTemp';
import Highlights from './Highlights';

// CONTEXT

import { useWeatherData } from '../context/WeatherContext';
import { useUnitType } from '../context/UnitContext';

// UTILITY FUNCTIONS

import roundNumber from '../utility/roundNumber';
import getWeatherDescription from '../utility/getWeatherDescription';
import getIcon from '../utility/getIcon';
import convertToImperial from '../utility/convertToImperial';
import getWindDirection from '../utility/getWindDirection';
import parseDate from '../utility/parseDate';

// ICONS

import humidity_icon from '../assets/humidity.svg';
import pressure_icon from '../assets/pressure.svg';
import wind_icon from '../assets/wind.svg';
import direction_icon from '../assets/direction.svg';


const CurrentWeather = () => {

    let {
        weatherData: {
            current: {
                temperature_2m: currentTemp,
                weather_code,
                time,
                relative_humidity_2m: humidity,
                pressure_msl: pressure,
                wind_speed_10m: windSpeed,
                wind_direction_10m: windDirection
            },
            daily: {
                temperature_2m_min,
                temperature_2m_max
            }
        },
        locationData: {
            city,
            countryName
        }
    } = useWeatherData();

    let minTemp = temperature_2m_min[0];
    let maxTemp = temperature_2m_max[0];

    const date = parseDate(time, 'date');
    const month = parseDate(time, 'month');

    const { unitType } = useUnitType();

    if(unitType === 'imperial') {
        currentTemp = convertToImperial(currentTemp, 'celsius');
        pressure = convertToImperial(pressure, 'pa');
        windSpeed = convertToImperial(windSpeed, 'km/h');
        minTemp = convertToImperial(temperature_2m_min[0], 'celsius');
        maxTemp = convertToImperial(temperature_2m_max[0], 'celsius'); 
    }


    const locationCard = (
        <Card className='card'>
            <Text className='text_xl'>
                {city}
            </Text>
            <Text className='text_m'>
                {countryName}
            </Text>
            <Text className='text_m'>
                Today {date} {month}
            </Text>
            <ValueUnit
                className='large'
                value={roundNumber(currentTemp)}
                unit={unitType === 'imperial' ? '°F' : '°C'}
            />
        </Card>
    );

    const weatherConditionCard = (
        <Card className='card'>
            <Text className='text_m'>
                {getWeatherDescription(weather_code)}
            </Text>
            <Icon
                className='icon_large'
                src={getIcon(weather_code)}
                alt='weather icon'
            />
            <MinMaxTemp
                className='minmax_temp'
                min={roundNumber(minTemp)}
                max={roundNumber(maxTemp)}
                unit={unitType === 'imperial' ? '°F' : '°C'}
            />
        </Card>
    );

    const highlightsCard = (
        <Card className='card'>
            <Highlights
                icon={humidity_icon}
                text='Humidity'
                value={humidity}
                unit='%'
            />
            <Highlights
                icon={pressure_icon}
                text='Pressure'
                value={pressure}
                unit={unitType === 'imperial' ? 'psi' : 'Pa'}
            />
            <Highlights
                icon={wind_icon}
                text='Wind Speed'
                value={roundNumber(windSpeed)}
                unit={unitType === 'imperial' ? 'mph': 'km/h'}
            />
            <Highlights
                icon={direction_icon}
                text='Wind Direction'
                value={getWindDirection(windDirection)}
            />
        </Card>
    );

    return (
        <section className='current_weather'>
            {locationCard}
            {weatherConditionCard}
            {highlightsCard}
        </section>
    );
};

export default CurrentWeather;