const fs = require('fs');
const { warningResponse, customResponse } = require('../helper/customResponse');

module.exports = { isFileExists, FileExists }

/**
 * @desc Check existence of file
 * @param {*} value // Accepts string
 */
function isFileExists(filename) {
    return fs.existsSync(filename);
}

function FileExists(filename) {
    if(!filename) {
        warningResponse(`file name is required`);
        return;
    }

    if(isFileExists(filename)) {
        customResponse('file exists');
    } else {
        customResponse('file does not exist');
    }
}