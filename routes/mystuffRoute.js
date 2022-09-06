const mystuff = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const currentDatabase = require(`../db/db.json`);

// const ATC = require('../helpers/ATC.js');
// const currentDatabase = require(`.${ATC}`);

// Renders the home for mystuff
mystuff.get('/', (req, res) => {

    res.json(currentDatabase);

    console.log('I am running')


});

module.exports = mystuff;