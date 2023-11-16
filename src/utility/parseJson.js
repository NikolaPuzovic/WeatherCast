const parseJson = async (response) => {
    try {
        return await response.json();
    } catch(error) {
        throw new Error(error.message);
    }
};

export default parseJson;