const fs = require('fs');
const { isFileExists } = require('./FileExists');
const { customResponse, warningResponse } = require('../helper/customResponse');
const { YELLOW, NONE } = require('../helper/ansiColorCode');

module.exports = { createFolder }

/**
 * @desc Create folder
 * @param {*} value // Accepts string
 */
function createFolder(foldername) {

    if(!foldername) {
        warningResponse(`folder name is required`);
        return;
    }

    if(isFileExists(foldername)) {
        customResponse(`${YELLOW}${foldername} already exists${NONE}`);
        return;
    } else {
        create(foldername);
    }
}

function create(foldername) {
    fs.mkdirSync(`${process.cwd()}/${foldername}`, { recursive: true },);
}