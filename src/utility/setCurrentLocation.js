const setCurrentLocation = (coordsObj, callBack) => {
    const {
        coords: {
            latitude,
            longitude
        }
    } = coordsObj;

    const coords = {
        lat: latitude,
        lon: longitude
    };

    callBack(coords);
};

export default setCurrentLocation;