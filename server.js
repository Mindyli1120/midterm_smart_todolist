"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 3000;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
const cookieSession = require('cookie-session');
const bcryptjs = require('bcryptjs');
const APIs = require('./secrets');
const newToDo = require('./data/new_data');
const path = require('path');

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const toDoListRoutes = require("./routes/toDoList");
const toDosRoutes = require("./routes/toDos");
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));


// Mount all resource routes
app.use("/api/users", usersRoutes(knex));
app.use("/api/todoList", toDoListRoutes(knex));
app.use("/api/to_dos", toDosRoutes(knex));



//cookie encrypt with cookie session
//if have time, get back to this 
app.use(cookieSession({
  name: 'session',
  keys: ['hel980'],
}));

// Home page
app.get("/", (req, res) => {
  res.render("index.html");
});

//Login  if have time, get back to this
app.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
})

//test content with APIs
app.post("/new", (req, res) => {
  let content = req.body.content;
  console.log("server side content: ", content);
  APIs.apis(content);
  res.redirect("/");
});



app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});



