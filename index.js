const fs = require('fs');
const package = require('./package');
const { options } = require('./options');

exports.createFileFunction = createFile;

function createFile() {
    
    const html5 = fs.readFileSync(`${__dirname}/resources/index.html`)
    const filename = process.argv[2];

    if(filename === undefined || filename === null) {
        console.log(package.version);
        return;
    }

    const splitFilename = filename.split(".");
    
    if(splitFilename.length === 1) {
        console.log(options(splitFilename[0]));
        return;
    }

    const lastIndex = splitFilename.length-1;
    const extension = splitFilename[lastIndex];

    if(extension === "html") {
        fs.writeFileSync(`${process.cwd()}/${filename}`, html5)
    } else {
        fs.writeFileSync(`${process.cwd()}/${filename}`, '')
    }
}

// createFile()