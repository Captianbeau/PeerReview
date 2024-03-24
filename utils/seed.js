const connection = require('../config/connection');
const { Users, Thoughts } = require('../models');
const { getRandomUser, getRandomEmail, getRandomThoughts } = require('./data');
//get data from data.js through require

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('seed start')

    let userCheck = await connection.db.listCollections({ name: 'Users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('Users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'Thoughts' }).toArray();
    if (thoughtCheck) {
        await connection.dropCollection('Thoughts');
    }

    const users = [];
    const thoughts = getRandomThoughts(10);

    for (let i = 0; i < 20; i++) {
        const username = getRandomUser();
        const email = getRandomEmail();

        users.push({
            username,
            email,
        });
    }

    await Users.collection.insertMany(users);
    await Thoughts.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding Finished');
    process.exit(0);
});