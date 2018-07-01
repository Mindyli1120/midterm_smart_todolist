"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

    router.put("/", (req, res) => {
        
        knex('to_dos').where("id", req.body.id).del()
        .then((results) => {
            res.json(results);
        });
    });
    return router;
}
