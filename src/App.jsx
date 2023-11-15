import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';

const App = () => {
    return (
        <div className='app_container'>
            <Header/>
            <CurrentWeather/>
        </div>
    );
};

export default App;