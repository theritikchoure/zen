const package = require('./package');
module.exports = { options }

/**
 * @desc Checks for options
 * @param {*} value // Accepts string
 */
function options(value) {
    if(value === '-v' || value === '--version'){
        return package.version;
    }
}