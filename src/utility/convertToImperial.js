const convertToImperial = (value, unitType) => {
    if(unitType === 'celsius' || unitType === 'Celsius') {
        return (value * 9 / 5) + 32;
    }

    if(unitType === 'pa' || unitType === 'Pa') {
        return Number((value / 6894.76).toFixed(2));
    }

    if(unitType === 'km/h' || unitType === 'Km/h') {
        return Number((value * 0.621371).toFixed(1));
    }
};

export default convertToImperial;