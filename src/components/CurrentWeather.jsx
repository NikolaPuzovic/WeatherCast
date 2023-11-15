// COMPONENTS

import Card from './Card';
import Icon from './Icon';
import Text from './Text';
import ValueUnit from './ValueUnit';
import MinMaxTemp from './MinMaxTemp';
import Highlights from './Highlights';

// ICONS

import humidity from '../assets/humidity.svg';
import pressure from '../assets/pressure.svg';
import wind from '../assets/wind.svg';
import direction from '../assets/direction.svg';
import partly_cloudy from '../assets/partly_cloudy.svg';

const CurrentWeather = () => {

    const locationCard = (
        <Card className='card'>
            <Text className='text_large'>
                Novi Sad
            </Text>
            <Text className='text_small'>
                Today 12 Dec
            </Text>
            <ValueUnit
                className='large'
                value={13}
                unit='°C'
            />
        </Card>
    );

    const weatherConditionCard = (
        <Card className='card'>
            <Text className='text_small'>
                Partly Cloudy
            </Text>
            <Icon
                className='icon_large'
                src={partly_cloudy}
                alt='sample'
            />
            <MinMaxTemp
                className='minmax_temp'
                min={5}
                max={15}
                unit='°C'
            />
        </Card>
    );

    const highlightsCard = (
        <Card className='card'>
            <Highlights
                icon={humidity}
                text='Humidity'
                value={75}
                unit='%'
            />
            <Highlights
                icon={pressure}
                text='Pressure'
                value={1205}
                unit='Pa'
            />
            <Highlights
                icon={wind}
                text='Wind Speed'
                value={42}
                unit='km/h'
            />
            <Highlights
                icon={direction}
                text='Wind Direction'
                value='S'
                unit=''
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