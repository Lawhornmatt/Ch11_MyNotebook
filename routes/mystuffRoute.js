const mystuff = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const currentDatabase = require(`../db/db.json`);
const randoID = require('../helpers/randoID');

// const ATC = require('../helpers/ATC.js');
// const currentDatabase = require(`.${ATC}`);

// Renders the home for mystuff
mystuff.get('/', (req, res) => {

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));

    console.log('You made a GET to /mystuff')

});

mystuff.post('/', (req, res) => {

    // console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {

        const newPost = {
          id: randoID(),
          title,
          text,
        };

        readAndAppend(newPost, './db/db.json');

    } else {
        res.error('Error in adding newPost');
    }
});

module.exports = mystuff;