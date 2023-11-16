import Header from './components/Header';
import MainContent from './components/MainContent';
import { WeatherDataProvider } from './context/WeatherContext';
import { UnitTypeProvider } from './context/UnitContext';

const App = () => {
    return (
        <div className='app_container'>
            <WeatherDataProvider>
                <UnitTypeProvider>
                    <Header/>
                    <MainContent/>
                </UnitTypeProvider>
            </WeatherDataProvider>
        </div>
    );
};

export default App;