const convertToImperial = (value, unitType) => {
    if(unitType === 'celsius' || unitType === 'Celsius') {
        return (value * 9 / 5) + 32;
    }

    if(unitType === 'pa' || unitType === 'Pa') {
        return Number((value / 6894.76).toFixed(3));
    }

    if(unitType === 'km/h' || unitType === 'Km/h') {
        return value * 0.621371;
    }
};

export default convertToImperial;