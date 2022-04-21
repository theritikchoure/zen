const fs = require('fs');

exports.createFileFunction = createFile;

function createFile() {
    const html5 = fs.readFileSync(`${__dirname}/resources/index.html`)
    const filename = process.argv[2];
    const splitFilename = filename.split(".");
    const lastIndex = splitFilename.length-1;
    const extension = splitFilename[lastIndex];

    if(extension === "html") {
        fs.writeFileSync(`${process.cwd()}/${filename}`, html5)
    } else {
        fs.writeFileSync(`${process.cwd()}/${filename}`, '')
    }
}