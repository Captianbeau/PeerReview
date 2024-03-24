const connection = require('../config/connection');
const {Users,Thoughts} = require('../models');
const {getRandomUser, getRandomEmail, getRandomThoughts} = require('./data');
//get data from data.js through require

connection.on('error', (err) => err);

connection.once('open', async () =>{
    console.log('seed start')
    
})