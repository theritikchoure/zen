const fs = require('fs');

module.exports = { isFileExists }

/**
 * @desc Check existence of file
 * @param {*} value // Accepts string
 */
function isFileExists(filename) {
    return fs.existsSync(filename);
}