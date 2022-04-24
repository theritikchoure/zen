const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const html5 = fs.readFileSync(`${__dirname}/../resources/index.html`)
const { options } = require('../options');
const { isFileExists } = require('./FileExists');
const { errorResponse } = require('../helper/customResponse');
const { EXTENSIONS } = require('../helper/constant');

module.exports = { createFile }

/**
 * @desc Create File for given extension
 * @param {*} value // Accepts string
 */
function createFile(filename) {

    if(isFileExists(filename)) {
        const rl = readline.createInterface({ input, output });
        rl.question(`${filename} already exists, do you want to overwrite it? y/N \n`, (answer) => {
            
            switch(answer) {
                case 'y':
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
    
    if(splitFilename.length === 1) {
        console.log(options(splitFilename[0]));
        return;
    }

    const extension = splitFilename[splitFilename.length-1];

    if(extension === "html" || extension === "htm") {
        fs.writeFileSync(`${process.cwd()}/${filename}`, html5)
    } else if(EXTENSIONS.includes(extension)) {
        fs.writeFileSync(`${process.cwd()}/${filename}`, '')
    } else {
        errorResponse("invalid extension");
    }
}