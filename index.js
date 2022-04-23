const { options } = require('./options');
const { createFile } = require('./features/CreateFile');
const { customResponse } = require('./helper/customResponse');
const { renameFile } = require('./features/RenameFile');
const { createFolder } = require('./features/CreateFolder');
const { RED, NONE } = require('./helper/ansiColorCode');
const { NAME } = require('./helper/constant');

exports.indexFunction = index;

async function index(){
    
    if(process.argv.length === 2) {
        console.log(`\n> Commands of touch are: `)
        console.log(``);
        console.log(`${NAME} <filename>.<extension>     create file for given extension`);
        console.log(`${NAME} -v                         to check version`);
        console.log(`${NAME} --version                  to check version`);
        console.log(``)
        return;
    }
    
    if(process.argv.length > 2) {
        const action = process.argv[process.argv.length - 1];

        if(process.argv.length === 3) {
            const splitFilename = action.split(".");

            switch(splitFilename.length) {
                case 1:
                    console.log("> " + options(splitFilename[0]));
                    break;
        
                default:
                    const filename = action;
                    createFile(filename);
                    break;
            }
        }

        if(process.argv.length === 4) {
            switch(action) {
                case '-dir':
                    const foldername = process.argv[2];
                    createFolder(foldername);
                    break;
        
                default:
                    customResponse(`${RED}> Command doesn't exist ${NONE}`);
                    break;
            }
        }

        if(process.argv.length === 5) {
            switch(action) {
                case '-mv':
                    const oldFilename = process.argv[2];
                    const newFilename = process.argv[3];
                    renameFile(oldFilename, newFilename);
                    break;
        
                default:
                    customResponse(`${RED}> Command doesn't exist ${NONE}`);
                    break;
            }
        }
    }
}

// index()