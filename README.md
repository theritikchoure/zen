
<h1 align="center">
	<br>
	<br>
	<img width="320" src="https://raw.githubusercontent.com/theritikchoure/theritikchoure/main/media/logo.png" alt="Zen">
	<br>
	<br>
	<br>
</h1>


# @ritikchoure/zen

Zen is command line tool to provide complete file system to access, delete, create, rename your files and so on...

[![GitHub license](https://img.shields.io/github/license/theritikchoure/zen.svg)](https://github.com/theritikchoure/zen/blob/master/LICENSE)
[![Maintainer](https://img.shields.io/badge/maintainer-theiritikchoure-green)](https://github.com/theritikchoure)

## Table of contents
1. [Installation](#installation)
2. [CLI Usage](#cli-usage)
    1. [Create File](#create-file)
	2. [Create Folder/Directory](#create-foldersdirectory)
	3. [Rename File/Folder](#rename-filefolder)
	4. [Remove File/Folder](#remove-filefolder)
	5. [Check File/Folder Existence](#check-filefolder-existence)
	6. [Read File](#read-file)
	7. [Read Directory](#read-directory)
	8. [Create Zip](#create-zip)
	9. [Create Local Server](#create-local-server)
	10. [Create & Download QR Code](#create-local-server)
	11. [Check Version](#check-version)
	12. [Get Help](#get-help)
3. [Authors](#authors)
4. [Feedback](#feedback)
5. [License](#license)
6. [Tech Stack](#tech-stack)

## Installation

```bash
npm i -g @ritikchoure/zen
```

make sure you install it globally.

To check successfull installation of zen, open command prompt or windows terminal.

Type in your cmd -

```bash
zen --version
```

## CLI Usage

### Create File

Using the following command, you can create files -

```bash
zen -f filename.extension
```

### Create Folders/Directory

Using the following command, you can create folders/directory -

```bash
zen -dir foldername
```

### Rename File/Folder

Using the following command, you can rename file/folder -

```bash
zen -rn oldfilename newfilename
```

### Remove File/Folder

Using the following command, you can remove file/folder -

```bash
zen -rm filename/foldername
```

### Check File/Folder Existence

Using the following command, you can check existence of any file/folder -

```bash
zen -e filename/foldername
```

### Read File

Using the following command, you can read contents of the file in utf-8 encoding -

```bash
zen -rf filename
```

### Read Directory

Using the following command, it will show the full list or content of your directory.

```bash
zen -rd
```

### Create Zip

Using the following command, it will create a zip file of the given file.

```bash
zen -zip filename
```

### Create Local Server

Using the following command, it will create a local server with 8080 as default port and host index.html, if index.html is exists in the current working directory.

We can use the custom port to listen on the server.

default
```bash
zen -serve 
```

Custom port
```bash
zen -serve -p portnumber
```

### Create & Download QR Code

Using the following command, you can create and download QR code image in your current working directory 

```bash
zen -qr <url>
```
### Check Version

Using the following command, you can check version of zen -

```bash
zen -v
```

or

```bash
zen --version
```

### Get Help

Using the following command, you can check available commands of zen -

```bash
zen --help
```

## Authors

- [@theritikchoure](https://github.com/theritikchoure)


## Feedback

If you have any feedback/queries, please reach out to us at ritvikchoure65@gmail.com


## License

[MIT](https://github.com/theritikchoure/zen/blob/master/LICENSE)


## Tech Stack

**Node,** **FS,**