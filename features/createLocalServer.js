/* Node.js static file web server */

// Importing necessary modules
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const { customResponse, warningResponse } = require("../helper/customResponse");
const { YELLOW, NONE, RED, GREEN } = require("../helper/ansiColorCode");
const { MIME_TYPE, PORT } = require("../helper/constant");

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

    console.log('-', parsedUrl.pathname)

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
    console.log(`${GREEN}✓${NONE} Server listening on port ${YELLOW}${port}${NONE}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`${RED}X${NONE} Error: ${err.port} is already in use, use different port`);
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
