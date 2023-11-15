//  COMPONENTS

import Icon from './Icon';
import Button from './Button';
import SearchForm from './SearchForm';

// ICONS

import logo from '../assets/weathercast.svg';
import location from '../assets/location.svg';
import fahrenheit from '../assets/fahrenheit.svg';

const Header = () => {
    return (
        <header className='header_container'>
            <Icon
                className='icon_logo'
                src={logo}
                alt='weathercast'
            />
            <SearchForm/>
            <Button className='button'>
                <Icon
                    src={location}
                    alt='location icon'
                />
            </Button>
            <Button className='button'>
                <Icon
                    src={fahrenheit}
                    alt='fahrenheit icon'
                />
            </Button>
        </header>
    );
};

export default Header;