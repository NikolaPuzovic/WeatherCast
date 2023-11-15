// COMPONENTS

import Card from '../components/Card';
import Text from './Text';
import Icon from './Icon';
import MinMaxTemp from './MinMaxTemp';

import fakeData from '../fakeData.json';
import partly_cloudy from '../assets/partly_cloudy.svg';

const Forecast = () => {

    const forecastCards = fakeData.map(obj => {
        return (
            <Card
                key={obj.id}
                className='card'
            >
            <Text className='text_small'>
                {obj.day}
            </Text>
            <Icon
                className='icon_medium'
                src={partly_cloudy}
                alt='icon'
            />
            <MinMaxTemp
                className='minmax_temp'
                min={obj.minTemperature}
                max={obj.maxTemperature}
                unit='°C'
            />
        </Card>
        );
    });

    return (
        <section className='forecast'>
            {forecastCards}
        </section>
    );
};

export default Forecast;