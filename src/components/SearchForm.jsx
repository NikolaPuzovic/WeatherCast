import { useState } from 'react';
import citiesArray from '../cities.json';

// CONTEXT

import { useWeatherData } from '../context/WeatherContext';

// UTILITY FUNCTIONS

import capitalizeWords from '../utility/capitalizeWords';

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
        console.log(locationName);

        const cities = citiesArray.filter(location => location.name === locationName);
        const sortedCities = cities.sort((a, b) => b.pop - a.pop);

        console.log(sortedCities);
        
        const {lat, lon} = sortedCities[0];

        setCoordinates({
            lat,
            lon
        });

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