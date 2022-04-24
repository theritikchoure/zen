const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const html5 = fs.readFileSync(`${__dirname}/../resources/index.html`)
const { isFileExists } = require('./FileExists');
const { errorResponse, warningResponse } = require('../helper/customResponse');
const { EXTENSIONS } = require('../helper/constant');
const { YELLOW, NONE } = require('../helper/ansiColorCode');

module.exports = { createFile }

/**
 * @desc Create File for given extension
 * @param {*} value // Accepts string
 */
function createFile(filename) {

    if(!filename) {
        warningResponse(`file name is required`);
        return;
    }

    if(isFileExists(filename)) {
        const rl = readline.createInterface({ input, output });
        rl.question(`> ${filename} already exists, ${YELLOW}do you want to overwrite it? y/N${NONE} \n`, (answer) => {
            
            switch(answer) {
                case 'y':
                    create(filename);
                    break;
                
                case 'Y':
                    create(filename);
                    break;
        
                case 'n':
                    break;
                
                case 'N':
                    break;
        
                default:
                    errorResponse("Command doesn't exist");
                    break;
            }
          
            rl.close();
        });
        return;
    } else {
        create(filename);
    }
}

function create(filename) {
    const splitFilename = filename.split(".");
    const extension = splitFilename[splitFilename.length-1];

    if(extension === "html" || extension === "htm") {
        fs.writeFileSync(`${process.cwd()}/${filename}`, html5)
    } else if(EXTENSIONS.includes(extension)) {
        fs.writeFileSync(`${process.cwd()}/${filename}`, '')
    } else {
        errorResponse("invalid extension");
    }
}