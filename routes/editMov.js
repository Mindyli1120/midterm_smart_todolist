"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

    router.put("/", (req, res) => {
        
        knex('to_do_lists').where({id: req.body.id}).update({category: "movies"})
        .then((results) => {
            res.json(results);
        });
    });
    return router;
}
