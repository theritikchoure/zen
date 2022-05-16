const fs = require('fs');
const { stdin: input, stdout: output } = require('process');

module.exports = { readDirectory }

/**
 * @desc Read Current Directory 
 */
function readDirectory() {
    try {
        read();
    } catch (error) {
        
    }
}

function read() {
    contentInsideFolder = fs.readdirSync(`${process.cwd()}`);

    console.log(`\n\t Directory ${process.cwd()}:\n`);
    contentInsideFolder.forEach(file => {
        output.write(file);
        output.write("\n"); 
    });
    output.write("\n");
}