const capitalizeWords = (text) => {
    if(text) {
        return text.split(' ').map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ');
    }
    return null;
};

export default capitalizeWords;