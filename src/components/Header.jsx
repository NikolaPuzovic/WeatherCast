// CONTEXT

import { useUnitType } from '../context/UnitContext';
import { useWeatherData } from '../context/WeatherContext';

// UTILITY FUNCTIONS

import getLocation from '../utility/getLocation';
import setCurrentLocation from '../utility/setCurrentLocation';

//  COMPONENTS

import Icon from './Icon';
import Button from './Button';
import SearchForm from './SearchForm';

// ICONS

import logo from '../assets/weathercast.svg';
import location from '../assets/location.svg';
import fahrenheit from '../assets/fahrenheit.svg';
import celsius from '../assets/celsius.svg';

const Header = () => {

    const { unitType, toggleUnitType } = useUnitType();
    const { setCoordinates } = useWeatherData();

    const goToUserLocation = () => {
        const errorMessage = 'Access to your location is not possible as the location feature is not enabled. To continue, go to settings and grant location access for our app.';

        getLocation(
            (coordsObj) => setCurrentLocation(coordsObj, setCoordinates),
            (error) => alert(errorMessage)
        );
    };

    return (
        <header className='header_container'>
            <Icon
                className='icon_logo'
                src={logo}
                alt='weathercast'
            />
            <SearchForm/>
            <Button
                className='button'
                onClick={goToUserLocation}
            >
                <Icon
                    src={location}
                    alt='location icon'
                />
            </Button>
            <Button
                className='button'
                onClick={toggleUnitType}
            >
                <Icon
                    src={unitType === 'imperial' ? celsius : fahrenheit}
                    alt='unit icon'
                />
            </Button>
        </header>
    );
};

export default Header;