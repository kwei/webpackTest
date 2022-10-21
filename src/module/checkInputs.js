export const checkInputs = (text) => {
    let isValid = true;
    text.split('').map(value => {
        if (value.charCodeAt(0) < 48 || value.charCodeAt(0) > 57) isValid = false;
    });
    return isValid;
};