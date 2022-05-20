/* Node.js static file web server */

// Importing necessary modules
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const { customResponse, warningResponse } = require("../helper/customResponse");
const { YELLOW, NONE, RED, GREEN, BLUE, NAVI_BLUE } = require("../helper/ansiColorCode");
const { MIME_TYPE, PORT } = require("../helper/constant");

//Get IPv4 Address - to access server using ip address
const ip = Object.values(require("os").networkInterfaces())
        .flat()
        .filter((item) => !item.internal && item.family === "IPv4")
        .find(Boolean).address;

module.exports = { createLocalServer };

/**
 * @desc Create local server
 * @param {*} value // Accepts string
 */
function createLocalServer(arguments) {
  const port =
    arguments.length > 3 && arguments[3] === "-p" ? arguments[4] : PORT;

  // Creating a server and listening at port
  const server = http.createServer((req, res) => {

    // Parsing the requested URL
    const parsedUrl = url.parse(req.url);
    let method;
    switch (req.method) {
      case 'GET':
        method = `${YELLOW}${req.method}${NONE}`
        break;
      case 'POST':
        method = `${GREEN}${req.method}${NONE}`
        break;
      case 'PUT':
        method = `${BLUE}${req.method}${NONE}`
        break;
      case 'DELETE':
        method = `${RED}${req.method}${NONE}`
        break;
    
      default:
        method = `${req.method}`
        break;
    }
    console.log(method, '-', parsedUrl.pathname)

    const sanitizePath = path
      .normalize(parsedUrl.pathname)
      .replace(/^(\.\.[\/\\])+/, "");

    let pathname = path.join(process.cwd() + "/" + sanitizePath);

    // If requested url is "/" like "http://localhost:1800/"
    if (parsedUrl.pathname === "/") {
      // Read index file from file system limit to
      // the current directory only.

      // pathname = path.join(__dirname + "/index.html");
      pathname = path.join(process.cwd() + "/" + "index.html");

      if (!fs.existsSync(pathname)) {
        // If the file is not found, return 404
        res.statusCode = 404;

        let msg = `File index.html not found! \n\nThe index.html file might have been removed, had its name changes, or is temporarily unavailalbe`;

        res.end(msg);
        return;
      } else {
        readFile(res, pathname);
      }
      return;
    }

    /* Processing the requested file pathname to
        avoid directory traversal like,
        http://localhost:1800/../fileOutofContext.txt
        by limiting to the current directory only. */

    if (!fs.existsSync(pathname)) {
      // If the file is not found, return 404
      res.statusCode = 404;
      res.end(`File ${pathname} not found!`);
      return;
    } else {
      // Read file from file system limit to the current directory only.
      readFile(res, pathname);
      return;
    }

    // throw new Error("Error!!!");
    this.emit("error", new Error("Error!!!"));
  });

  server.listen(port, () => {
    console.log(`\n> ${process.cwd()}\n`);
    console.log(`${GREEN}✓${NONE} Server listening on port ${YELLOW}${port}${NONE} \n`);
    console.log(`-------------------------------------------------------`)
    console.log(`\tLocal: \t\t ${NAVI_BLUE}http://localhost:${port}${NONE}`)
    console.log(`\tExternal: \t ${NAVI_BLUE}http://${ip}:${port}${NONE}`)
    console.log(`-------------------------------------------------------`)
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`${RED}X${NONE} Error: ${err.port} is already in use, use different port`);
      console.log(`you can change the default ${err.port} with other port using below command`);
      console.log(``);
      console.log(`zen -serve -p <portnumber>`);
    }
  });
}

// Read file from file system limit to the current directory only.
const readFile = (res, pathname) => {
  fs.readFile(pathname, function (err, data) {
    if (err) {
      res.statusCode = 500;
      res.end(`Error in getting the file.`);
      return;
    } else {
      // Based on the URL path, extract the file extension. Ex .js, .doc, ...
      const ext = path.parse(pathname).ext;

      // If the file is found, set Content-type and send data
      res.setHeader("Content-type", MIME_TYPE[ext] || "text/plain");
      res.end(data);
      return;
    }
  });
};
