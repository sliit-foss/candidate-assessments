const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateEmailInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.name = !isEmpty(data.name) ? data.name : "";

    // Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};