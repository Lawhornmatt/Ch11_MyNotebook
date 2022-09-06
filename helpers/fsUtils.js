const fs = require('fs');
const util = require('util');

var usedNames = [];

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

// Vanilla way sourced from school work, don't use this.
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
);

// Extended version made by me that has unique file names.
const mutabToFile = (content) => {

  let filename = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

  fs.writeFile(`./db/${filename}.json`, JSON.stringify(content, null, 4), (err) => 
    err ? console.error(err) : console.info(`\nData written to db/ as ${filename}`));
};

const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, mutabToFile, readAndAppend };