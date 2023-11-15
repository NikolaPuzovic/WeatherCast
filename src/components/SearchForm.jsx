// COMPONENTS

import Button from './Button';
import Icon from './Icon';

// ICONS

import search_icon from '../assets/search.svg';

const SearchForm = () => {
    return (
        <form className='search_form'>
            <input
                type='text'
                placeholder='search...'
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