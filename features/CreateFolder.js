const fs = require('fs');
const { isFileExists } = require('./FileExists');
const { customResponse } = require('../helper/customResponse');
const { YELLOW, NONE } = require('../helper/ansiColorCode');

module.exports = { createFolder }

/**
 * @desc Create folder
 * @param {*} value // Accepts string
 */
function createFolder(foldername) {

    const splitFolderName = foldername.split(".");

    if(isFileExists(splitFolderName[0])) {
        customResponse(`${YELLOW}${splitFolderName[0]} already exists${NONE}`);
        return;
    } else {
        create(splitFolderName[0]);
    }
}

function create(foldername) {
    fs.mkdirSync(`${process.cwd()}/${foldername}`, { recursive: true },);
}