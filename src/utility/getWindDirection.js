const getWindDirection = (degree) => {
    let direction = null;

    if (degree >= 337.5 || degree < 22.5) {
        direction = 'N';
    } else if (degree >= 22.5 && degree < 67.5) {
        direction = 'NE';
    } else if (degree >= 67.5 && degree < 112.5) {
        direction = 'E';
    } else if (degree >= 112.5 && degree < 157.5) {
        direction = 'SE';
    } else if (degree >= 157.5 && degree < 202.5) {
        direction = 'S';
    } else if (degree >= 202.5 && degree < 247.5) {
        direction = 'SW';
    } else if (degree >= 247.5 && degree < 292.5) {
        direction = 'W';
    } else if (degree >= 292.5 && degree < 337.5) {
        direction = 'NW';
    } else {
        direction = 'Unknown';
    }

    return direction;
};

export default getWindDirection;