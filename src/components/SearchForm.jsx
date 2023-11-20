import { useState, useEffect } from 'react';

// CONTEXT

import { useWeatherData } from '../context/WeatherContext';

// UTILITY FUNCTIONS

import capitalizeWords from '../utility/capitalizeWords';
import checkForError from '../utility/checkForError';
import parseJson from '../utility/parseJson';

// COMPONENTS

import Button from './Button';
import Icon from './Icon';
import SearchResults from './SearchResults';

// ICONS

import search_icon from '../assets/search.svg';

const SearchForm = () => {

    const [jsonData, setJsonData] = useState([]);
    const [filteredData, setFilteredData] = useState(null);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const importData = async () => {
            const {default: locations} = await import('../cities.json');
            setJsonData(locations);
        }
        importData();
    }, []);

    const { setCoordinates } = useWeatherData();

    const filterData = (e)=> {
        const {value} = e.target;
        const input = new RegExp(value, 'i');
        const filteredData = jsonData.filter(location => input.test(location.name)).slice(0, 10);

        setFilteredData(filteredData);
        setInputValue(value);
    };

    const setLatLong = (e) => {
        e.preventDefault();
        
        const locationName = capitalizeWords(inputValue);
        const geocodingApi = `https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=10&language=en&format=json`;

        fetch(geocodingApi)
            .then(response => checkForError(response))
            .then(data => parseJson(data))
            .then(locationsArray => {
                if(locationsArray.results) {
                    const {latitude, longitude} = locationsArray.results[0];
                    
                    setCoordinates({
                        lat: latitude,
                        lon: longitude
                    });
                    return;
                }
                throw new Error(`Unable to find the location or it doesn't exist. Please check for any typing errors.`);
            })
            .catch(error => alert(error.message));

        setInputValue('');
    };

    const selectLocation = (e) => {
        const {innerText: locationName} = e.target;
        setInputValue(locationName);
        setFilteredData(null);
    }

    return (
        <div className='form_container'>
            <form
                className='search_form'
                onSubmit={setLatLong}
            >
                <input
                    type='text'
                    placeholder='search...'
                    value={inputValue}
                    onChange={filterData}
                    spellCheck={false}
                />
                <Button className='search_button'>
                    <Icon
                        src={search_icon}
                        alt='search icon'
                    />
                </Button>
            </form>
            {filteredData && inputValue &&
                    <SearchResults
                        dataArray={filteredData}
                        onClick={selectLocation}
                    />
            }
        </div>
    );
};

export default SearchForm;