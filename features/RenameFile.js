const fs = require('fs');
const { isFileExists } = require('./FileExists');
const { warningResponse } = require('../helper/customResponse');

module.exports = { renameFile }

/**
 * @desc Create File for given extension
 * @param {*} value // Accepts string
 */
function renameFile(oldFilename, newFilename) {
    if(!isFileExists(oldFilename)) {
        warningResponse(`${oldFilename} doesn't exist`);
        return;
    } else if(isFileExists(newFilename)) {
        warningResponse(`${newFilename} already exists`);
        return;
    } else {
        rename(oldFilename, newFilename);
        return;
    }
}

function rename(oldFilename, newFilename) {
    fs.renameSync(oldFilename, newFilename);
}