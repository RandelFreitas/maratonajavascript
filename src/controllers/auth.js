const express = require ('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');

const router = express.Router();

const saltRounds = 10;

router.get('/sign-in', (req, res)=>{
    return res.json('Sign in!');
});

router.get('/sign-up', async (req, res)=>{
    const email = 'randel@randel.com';
    const password = '123456';

    //const salt = 'querysdaas';
    const hash = bcrypt.hashSync(password, saltRounds);

    //const result = await Account.create({email, password});
    console.log(hash);

    return res.json('Sign up!');
});

module.exports = router;