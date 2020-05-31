const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuidv1 = require("uuid/v1");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);