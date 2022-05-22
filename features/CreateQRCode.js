const { customResponse, warningResponse } = require('../helper/customResponse');
const { GREEN, NONE } = require('../helper/ansiColorCode');

const fs = require('fs');
const https = require('https');

const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

module.exports = { createQR }

/**
 * @desc Generate & download qr code 
 * @param {*} value // Accepts string
 */
function createQR(url) {

    const isUrlValid = urlRegex.test(url)

    if(!isUrlValid) {
        warningResponse('Please enter valid url');
    } else {
        downloadImage(url)
    }

}

function downloadImage(url) {

    const generateImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`;
  
    https.get(generateImage, (res) => {
        if (res.statusCode === 200) {
            // Image will be stored at this path
            const path = `${process.cwd()}/zen-qr-${Math.floor(0+Math.random()*90)}.jpeg`; 
            const filePath = fs.createWriteStream(path);
            res.pipe(filePath);
            filePath.on('finish',() => {
                filePath.close(); 
                customResponse(`${GREEN}QR Code downloaded...${NONE}`)
            })
        } else {
            // Consume response data to free up memory
            res.resume();
            warningResponse(`Request Failed`)

        }
    });
}