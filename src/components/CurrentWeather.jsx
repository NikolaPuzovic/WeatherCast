// COMPONENTS

import Card from './Card';
import Text from './Text';
import ValueUnit from './ValueUnit';

const CurrentWeather = () => {
    return (
        <section>
            <Card className='card'>
                <Text className='text_large'>
                    Belgrade
                </Text>
                <Text className='text_small'>
                    Today 12 Dec
                </Text>
                <ValueUnit
                    className='large'
                    value={17}
                    unit='°C'
                />
            </Card>
        </section>
    );
};

export default CurrentWeather;