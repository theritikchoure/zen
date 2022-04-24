
// ANSI Escape Codes
const NAME="zen";

const EXTENSIONS = ["doc", "docx", "odt", "pdf", "xls", "xlsx", "ods", "ppt", "ppts", "txt", "asp", "aspx", 
                    "axd", "asx", "asmx", "ashx", "css", "cfm", "yaws", "swf", "html", "htm", "xhtml", "jhtml", 
                    "jsp", "jspx", "wss", "do", "action", "js", "jsx", "pl", "php", "php4", "php3", "py", "rb", 
                    "rhtml", "shtml", "xml", "rss", "svg", "cgi", "dll", "atom", "ejs"];

function WELCOME_SCREEN() {
    console.log(`\n> $ zen [options]`);
    console.log(``);
    console.log(`Options: `);
    console.log(``);
    console.log(`${NAME} -f <filename>                           create file for given extension`);
    console.log(`${NAME} -dir <foldername>                       create folder`);
    console.log(`${NAME} -rn <oldfilename> > <newfilename>       rename old file name with new file name`);
    console.log(`${NAME} -rm <filename/foldername>               delete file or folder`);
    console.log(`${NAME} -e <filename/foldername>                file/folder exists or not`);
    console.log(`${NAME} -v                                      to check version`);
    console.log(`${NAME} --version                               to check version`);
    console.log(`${NAME} --help                                  show this usage information`);
    console.log(``)
    return;
}

module.exports = { NAME, EXTENSIONS, WELCOME_SCREEN }