const capitalizeWords = (text) => {
    return text.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
};

export default capitalizeWords;