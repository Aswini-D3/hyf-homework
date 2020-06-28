const express = require('express');
const router = express.Router();
const knex = require('../database');

router.get('/', async function (req, res) {
    const contacts = await knex.select('*').table('contacts');
    res.send(contacts);
});

router.post('/', async function (req, res) {
    console.log(req.body);
    const newContact = {
        idcontacts: req.query.idcontacts,
        name: req.query.name,
        phonenumber: req.query.phonenumber
    };
    await knex("contacts").insert(newContact);
    res.send('hello contacts post');
});

router.put('/:id', async function(req, res) {
    console.log(`params.id=${req.params.id}`);
    const thisContact = await knex("contacts")
        .where({'idcontacts' : req.params.id})
        .update({name: req.query.name});
    res.send('Came back with Homer');
});

router.delete('/:id', async function (req, res, next) {
    let id = parseInt(req.params.id);
    await knex("contacts").delete(id);
    res.send('deleted ',id);
});

module.exports = router;
