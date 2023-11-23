import { useState, useEffect } from 'react';

// COMPONENTS

import Button from './Button';
import Icon from './Icon';
import SearchResults from './SearchResults';

// CONTEXT

import { useWeatherData } from '../context/WeatherContext';

// UTILITY FUNCTIONS

import capitalizeWords from '../utility/capitalizeWords';

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
          
        try {
            const [location, country] = inputValue.split(',');

            if(location && country) {
                const locationName = capitalizeWords(location.trim());
                const countryName = capitalizeWords(country.trim());
                
                const locationsArray = jsonData.filter(location => location.name === locationName && location.country === countryName);

                if(locationsArray.length > 0) {
                    const {coords: {lat, lon}} = locationsArray[0];
                    setCoordinates({lat, lon});
                    setInputValue('');
                    return;
                }
                throw new Error(`Unable to find the location or it doesn't exist. Please check for any typing errors.`);
            }
            if(location) {
                const locationName = capitalizeWords(location.trim());

                const locationsArray = jsonData.filter(location => location.name === locationName);

                if(locationsArray.length > 0) {
                    const locations = locationsArray.sort((a, b) => b.pop - a.pop)[0];
                    const {coords: {lat, lon}} = locations;
                    setCoordinates({lat, lon});
                    setInputValue('');
                    return;
                }
                throw new Error(`Unable to find the location or it doesn't exist. Please check for any typing errors.`);
            }
            throw new Error(`Searchbar is empty, please provide location name.`);
        } catch(error) {
            alert(error.message);
        }
    };

    const selectLocation = (coords) => {
        const {lat, lon} = coords;
        setCoordinates({lat, lon});
        setFilteredData(null);
        setInputValue('');
    };

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