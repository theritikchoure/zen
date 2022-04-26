const fs = require('fs');
const { isFileExists } = require('./FileExists');
const { warningResponse } = require('../helper/customResponse');

module.exports = { readFile }

/**
 * @desc Create File for given extension
 * @param {*} value // Accepts string
 */
function readFile(filename) {

    if(!filename) {
        warningResponse(`file name is required`);
        return;
    }

    try {
        if(!isFileExists(filename)) {
            warningResponse(`file does not exist`);
            return;
        } else {
            read(filename);
        }

    } catch (error) {
        if(error.code === 'EISDIR') {
            warningResponse(`${filename} is a directory, cannot read it`);
            return;
        }
    }
}

function read(filename) {

    const data = fs.readFileSync(`${process.cwd()}/${filename}`, {encoding:'utf8', flag:'r'});

    // Display the file data
    console.log(data);
    return;
}