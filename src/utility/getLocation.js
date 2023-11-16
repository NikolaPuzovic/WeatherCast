const getLocation = (onSuccess, onError) => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
};

export default getLocation;