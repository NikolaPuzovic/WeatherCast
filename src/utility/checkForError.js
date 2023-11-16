const checkForError = (response) => {
    if(!response.ok) {
        throw new Error('Response is not valid');
    }
    return response;
};

export default checkForError;