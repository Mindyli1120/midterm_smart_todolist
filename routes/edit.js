"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex('to_dos').select('to_dos.*', 'to_do_lists.category').join('to_do_lists', 'to_dos.list_id','to_do_lists.id')
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
