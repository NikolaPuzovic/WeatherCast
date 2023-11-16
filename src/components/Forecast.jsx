// CONTEXT

import { useWeatherData } from '../context/WeatherContext';
import { useUnitType } from '../context/UnitContext';

// UTILITY FUNCTIONS

import convertToImperial from '../utility/convertToImperial';
import roundNumber from '../utility/roundNumber';
import getIcon from '../utility/getIcon';
import parseDate from '../utility/parseDate';

// COMPONENTS

import Card from '../components/Card';
import Text from './Text';
import Icon from './Icon';
import MinMaxTemp from './MinMaxTemp';

import { nanoid } from 'nanoid';


const Forecast = () => {

    const {
        weatherData: {
            daily: {
                weather_code,
                time,
                temperature_2m_min: minTempArray,
                temperature_2m_max: maxTempArray
            }
        }
    } = useWeatherData();

    const { unitType } = useUnitType();

    const forecastCards = minTempArray.map((el, indx) => {

        if(indx === 0) {
            return null;
        }

        let minTemp = minTempArray[indx];
        let maxTemp = maxTempArray[indx];

       if(unitType === 'imperial') {
            minTemp = convertToImperial(minTempArray[indx], 'celsius');
            maxTemp = convertToImperial(maxTempArray[indx], 'celsius');
       }

        return (
            <Card
                key={nanoid()}
                className='card'
            >
            <Text className='text_small'>
                {indx === 1 ? 'Tomorrow' : parseDate(time[indx], 'day')}
            </Text>
            <Icon
                className='icon_medium'
                src={getIcon(weather_code[indx])}
                alt='icon'
            />
            <MinMaxTemp
                className='minmax_temp'
                min={roundNumber(minTemp)}
                max={roundNumber(maxTemp)}
                unit={unitType === 'imperial' ? '°F' : '°C'}
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