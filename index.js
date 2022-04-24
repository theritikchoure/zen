const { options } = require('./options');
const package = require('./package');
const { customResponse } = require('./helper/customResponse');
const { WELCOME_SCREEN } = require('./helper/constant');
const { GREEN, NONE } = require('./helper/ansiColorCode');

exports.indexFunction = index;

async function index(){

    const arguments = process.argv;
    
    if(arguments.length === 2) {
        customResponse(`${GREEN}>version ${package.version}${NONE}`)
        WELCOME_SCREEN();
    }
    
    if(arguments.length > 2) {
        options(arguments);
    }
}

// index()