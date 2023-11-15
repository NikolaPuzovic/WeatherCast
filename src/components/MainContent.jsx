import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const MainContent = () => {
    return (
        <main className='main_content'>
            <CurrentWeather/>
            <Forecast/>
        </main>
    );
};

export default MainContent;