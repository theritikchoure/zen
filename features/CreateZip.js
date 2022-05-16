const { isFileExists } = require('./FileExists');
const { customResponse, warningResponse } = require('../helper/customResponse');
const { YELLOW, NONE } = require('../helper/ansiColorCode');

const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');

const { promisify } = require('util');
const pipe = promisify(pipeline);
const fs = require("fs");

module.exports = { createZip }

/**
 * @desc Create zip 
 * @param {*} value // Accepts string
 */
function createZip(foldername) {

    if(!foldername) {
        warningResponse(`folder name is required`);
        return;
    }

    if(!isFileExists(foldername)) {
        warningResponse(`${foldername} doesn't exists`);
        return;
    } if(fs.statSync(foldername).isDirectory()) {
        warningResponse(`${foldername} is a directory`);
        return;
    } else {
        create(foldername);
    }
}

async function create(foldername) {
    try {
        const gzip = createGzip();
        const source = createReadStream(foldername);
        const destination = createWriteStream(`${foldername}.zip`);
        await pipe(source, gzip, destination);
    } catch (error) {
        warningResponse('An error occurred');
        process.exitCode = 1;
    }
}