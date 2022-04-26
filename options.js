const package = require('./package');
const { errorResponse, successResponse } = require('./helper/customResponse');
const { WELCOME_SCREEN } = require('./helper/constant');
const { createFile } = require('./features/CreateFile');
const { createFolder } = require('./features/CreateFolder');
const { renameFile } = require('./features/RenameFile');
const { deleteFile } = require('./features/DeleteFile');
const { FileExists } = require('./features/FileExists');
const { readFile } = require('./features//ReadFile');

module.exports = { options }

/**
 * @desc Checks for options
 * @param {*} arguments // Accepts string
 */
function options(arguments) {

    const command = arguments[2];

    switch(command) {
        case '-f':
            createFile(arguments[3]);
            break;
        
        case '-dir':
            createFolder(arguments[3]);
            break;

        case '-rn':
            renameFile(arguments[3], arguments[4]);
            break;
        
        case '-rm':
            deleteFile(arguments[3]);
            break;

        case '-e':
            FileExists(arguments[3]);
            break;
        
        case '-r':
            readFile(arguments[3]);
            break;

        case '-v':
            successResponse(`> ${package.version}`);
            break;

        case '--version':
            successResponse(`> ${package.version}`);
            break;
        
        case '--help':
            WELCOME_SCREEN();
            break;

        default:
            errorResponse(`command does not exist`);
            break;
    }

}