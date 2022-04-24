const { YELLOW, RED, NONE } = require("./ansiColorCode");

module.exports = { customResponse, errorResponse, warningResponse }

/**
 * @desc response on console
 * @param {*} value // Accepts string
 */
function customResponse(message) {
    console.log(`${message}`);
}

function errorResponse(message) {
    console.log(`${RED}> ${message} ${NONE}`);
}

function warningResponse(message) {
    console.log(`${YELLOW}> ${message} ${NONE}`);
}