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
        case 45: {
            description = 'Fog';
            break;
        }
        case 48: {
            description = 'Depositing Fog';
            break;
        }
        case 51: {
            description = 'Light Drizzle';
            break;
        }
        case 53: {
            description = 'Moderate Drizzle';
            break;
        }
        case 55: {
            description = 'Dense Drizzle';
            break;
        }
        case 56: {
            description = 'Light Freezing Drizzle';
            break;
        }
        case 57: {
            description = 'Dense Freezing Drizzle';
            break;
        }
        case 61: {
            description = 'Slight Rain';
            break;
        }
        case 63: {
            description = 'Moderate Rain';
            break;
        }
        case 65: {
            description = 'Heavy Rain';
            break;
        }
        case 66: {
            description = 'Light Freezing Rain';
            break;
        }
        case 67: {
            description = 'Heavy Freezing Rain';
            break;
        }
        case 71: {
            description = 'Slight Snow Fall';
            break;
        }
        case 73: {
            description = 'Moderate Snow Fall';
            break;
        }
        case 75: {
            description = 'Heavy Snow Fall';
            break;
        }
        case 77: {
            description = 'Snow Grains';
            break;
        }
        case 80: {
            description = 'Slight Rain Shower';
            break;
        }
        case 81: {
            description = 'Moderate Rain Shower';
            break;
        }
        case 82: {
            description = 'Violent Rain Shower';
            break;
        }
        case 85: {
            description = 'Slight Snow Shower';
            break;
        }
        case 86: {
            description = 'Heavy Snow Shower';
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