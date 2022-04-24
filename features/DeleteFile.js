const fs = require('fs');
const { isFileExists } = require('./FileExists');
const { customResponse, warningResponse } = require('../helper/customResponse');
const { YELLOW, NONE } = require('../helper/ansiColorCode');

module.exports = { deleteFile }

/**
 * @desc Delete File or folder
 * @param {*} value // Accepts string
 */
function deleteFile(name) {

    if(!name) {
        warningResponse(`file/folder name is required`);
        return;
    }

    if(!isFileExists(name)) {
        customResponse(`${YELLOW}${name} does not exists${NONE}`);
        return;
    } else {
        del(name);
    }
}

function del(name) {
    fs.rmdirSync(`${process.cwd()}/${name}`, { recursive: true });
}