const { GREEN, YELLOW, RED, NONE } = require("./ansiColorCode");

module.exports = { customResponse, errorResponse, warningResponse, successResponse }

/**
 * @desc response on console
 * @param {*} value // Accepts string
 */
function customResponse(message) {
    console.log(`${message}`);
}

function successResponse(message) {
    console.log(`${GREEN}${message} ${NONE}`);
}

function errorResponse(message) {
    console.log(`${RED}> ${message} ${NONE}`);
}

function warningResponse(message) {
    console.log(`${YELLOW}> ${message} ${NONE}`);
}