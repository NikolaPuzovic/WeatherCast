const getWeatherDescription = (weatherCode) => {
    let description = null;

    switch(weatherCode) {
        case 0: {
            description = 'Clear Sky';
            break;
        }
        case 1: {
            description = 'Mainly Clear';
            break;
        }
        case 2: {
            description = 'Partly Cloudy';
            break;
        }
        case 3: {
            description = 'Overcast';
            break;
        }
        case 45:
        case 48: {
            description = 'Fog';
            break;
        }
        case 51:
        case 53:
        case 55: {
            description = 'Drizzle';
            break;
        }
        case 56:
        case 57: {
            description = 'Freezing Drizzle';
            break;
        }
        case 61:
        case 63:
        case 65: {
            description = 'Rain';
            break;
        }
        case 66:
        case 67: {
            description = 'Freezing Rain';
            break;
        }
        case 71:
        case 73:
        case 75: {
            description = 'Snow Fall';
            break;
        }
        case 77: {
            description = 'Snow Grains';
            break;
        }
        case 80:
        case 81:
        case 82: {
            description = 'Rain Snower';
            break;
        }
        case 85:
        case 86: {
            description = 'Snow Shower';
            break;
        }
        case 95: {
            description = 'Thunderstorm';
            break;
        }
        case 96:
        case 99: {
            description = 'Thunderstorm & Hail';
            break;
        }
        default: {
            description = 'Unknown';
        }
    }
    
    return description;
};

export default getWeatherDescription;