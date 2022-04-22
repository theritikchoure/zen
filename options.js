const package = require('./package');
module.exports = { options }

/**
 * @desc Checks for options
 * @param {*} value // Accepts string
 */
function options(value) {

    switch(value) {
        case '-v':
            return package.version;

        case '--version':
            return package.version;

        default:
            return "Command doesn't exist";
    }

}