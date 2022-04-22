const { createFile } = require('./features/CreateFile');
const { options } = require('./options');

exports.indexFunction = index;

async function index(){
    
    if(process.argv.length === 2) {
        console.log("\n> Commands of touch are: ")
        console.log("");
        console.log("touch <filename>.<extension>     create file for given extension");
        console.log("touch -v                         to check version");
        console.log("touch --version                  to check version");
        console.log('')
        return;
    }

    const filename = process.argv[2];

    if(process.argv[2]) {
        const splitFilename = filename.split(".");
        if(splitFilename.length === 1) {
            console.log("> " + options(splitFilename[0]));
            return;
        }
    }

    if(process.argv.length === 3) {
        createFile(filename);
    }
}

// index()