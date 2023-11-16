import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { useWeatherData } from '../context/WeatherContext';

const MainContent = () => {

    const { weatherData } = useWeatherData();
    
    return (
        <main className='main_content'>
            {weatherData.current &&
                <>
                    <CurrentWeather/>
                    <Forecast/>
                </>
            }
        </main>
    );
};

export default MainContent;