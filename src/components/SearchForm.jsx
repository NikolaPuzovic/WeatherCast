import { useState } from 'react';

// CONTEXT

import { useWeatherData } from '../context/WeatherContext';

// UTILITY FUNCTIONS

import capitalizeWords from '../utility/capitalizeWords';
import checkForError from '../utility/checkForError';
import parseJson from '../utility/parseJson';

// COMPONENTS

import Button from './Button';
import Icon from './Icon';

// ICONS

import search_icon from '../assets/search.svg';


const SearchForm = () => {

    const [inputValue, setInputValue] = useState('');

    const { setCoordinates } = useWeatherData();

    const changeInputValue = (e)=> {
        setInputValue(e.target.value);
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

    return (
        <form
            className='search_form'
            onSubmit={setLatLong}
        >
            <input
                type='text'
                placeholder='search...'
                value={inputValue}
                onChange={changeInputValue}
                spellCheck={false}
            />
            <Button className='search_button'>
                <Icon
                    src={search_icon}
                    alt='search icon'
                />
            </Button>
        </form>
    );
};

export default SearchForm;