const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const pegext = require('../helpers/pegext');

// const ATC = require('../helpers/ATC.js');
// const currentDatabase = require(`.${ATC}`);

// Renders the home for notes
notes.get('/', (req, res) => {

    res.render('notes');

});

module.exports = notes;