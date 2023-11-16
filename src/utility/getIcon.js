import clear from '../assets/clear.svg';
import partly_cloudy from '../assets/partly_cloudy.svg';
import overcast from '../assets/overcast.svg';
import drizzle from '../assets/drizzle.svg';
import drizzle_dense from '../assets/drizzle_dense.svg';
import freezing_rain from '../assets/freezing_rain.svg';
import rain_light from '../assets/rain_light.svg';
import rain_dense from '../assets/rain_dense.svg';
import snow from '../assets/snow.svg';
import snow_dense from '../assets/snow_dense.svg';
import snow_grains from '../assets/snow_grains.svg';
import rain_shower_light from '../assets/rain_shower_light.svg';
import rain_shower_moderate from '../assets/rain_shower_moderate.svg';
import rain_shower_heavy from '../assets/rain_shower_heavy.svg';
import snow_shower from '../assets/snow_shower.svg';
import snow_shower_dense from '../assets/snow_shower_dense.svg';
import thunderstorm from '../assets/thunderstorm.svg';

const getIcon = (weatherCode) => {
    let icon = null;

    switch(weatherCode) {
        case 0: {
            icon = clear;
            break;
        }
        case 1:
        case 2: {
            icon = partly_cloudy;
            break;
        }
        case 3: {
            icon = overcast;
            break;
        }
        case 45:
        case 48: {
            icon = overcast;
            break;
        }
        case 51:
        case 53: {
            icon = drizzle;
            break;
        }
        case 55: {
            icon = drizzle_dense;
            break;
        }
        case 56:
        case 57: {
            icon = freezing_rain;
            break;
        }
        case 61: {
            icon = rain_light;
            break;
        }
        case 63: {
            icon = rain_dense;
            break;
        }
        case 65: {
            icon = rain_dense;
            break;
        }
        case 66:
        case 67: {
            icon = freezing_rain;
            break;
        }
        case 71: {
            icon = snow;
            break;
        }
        case 73:
        case 75: {
            icon = snow_dense;
            break;
        }
        case 77: {
            icon = snow_grains;
            break;
        }
        case 80: {
            icon = rain_shower_light;
            break;
        }
        case 81: {
            icon = rain_shower_moderate;
            break;
        }
        case 82: {
            icon = rain_shower_heavy;
            break;
        }
        case 85: {
            icon = snow_shower;
            break;
        }
        case 86: {
            icon = snow_shower_dense;
            break;
        }
        case 95:
        case 96:
        case 99: {
            icon = thunderstorm;
            break;
        }
        default: {
            icon = '';
        }
    }

    return icon;
};

export default getIcon;