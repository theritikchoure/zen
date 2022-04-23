const fs = require('fs');
const { isFileExists } = require('./FileExists');
const { customResponse } = require('../helper/customResponse');
const { RED, NONE } = require('../helper/ansiColorCode');

module.exports = { renameFile }

/**
 * @desc Create File for given extension
 * @param {*} value // Accepts string
 */
function renameFile(oldFilename, newFilename) {

    if(isFileExists(oldFilename) && !isFileExists(newFilename)) {
        rename(oldFilename, newFilename);
        return;
    } else {
        customResponse(`${RED}> File doesn't exist ${NONE}`);
    }
}

function rename(oldFilename, newFilename) {
    fs.renameSync(oldFilename, newFilename);
}