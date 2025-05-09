const isEmpty = (value) =>
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);

module.exports = isEmpty;
// This function checks if a value is empty. It returns true if the value is empty and false otherwise. The function checks for different types of values, including undefined, null, objects, and strings. If the value is an object, it checks if it has any keys. If the value is a string, it checks if it has any non-whitespace characters. The function is used to validate input data in various parts of the application, such as user registration and login.
