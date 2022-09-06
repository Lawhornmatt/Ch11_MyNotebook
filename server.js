// ====================
//      REQUIRES
// ====================

const express = require('express');
const path = require('path');

// == ROUTES (REQ) == //
const notes = require('./routes/notesRoute');
const mystuff = require('./routes/mystuffRoute');

// ====================
//      INITS
// ====================

const PORT = 30547;

const app = express();

// == ENGINE ==

app.set('view engine', 'ejs');

// ====================
//      MIDDLEWARE
// ====================

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// == ROUTES (MIDL) == //
app.use('/notes', notes);
app.use('/mystuff', mystuff);

// app.use(express.static('public'));
app.use('/public', express.static('public'));

// ====================
//      STATIC PUBLIC DISPLAYS
// ====================

app.get('/', (req, res) =>
    res.render('index.ejs')
);

app.get('/*', (req, res) =>
  res.render('404.ejs')
);

// ====================
//      LISTEN
// ====================

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚚`)
);

