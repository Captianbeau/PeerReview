const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getUser, user, thought } = require('./data');
//get data from data.js through require

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('seed start')

    let userCheck = await connection.db.listCollections({ name: 'user' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thought' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }



getUser()



     await User.collection.insertMany(user);
    await Thought.collection.insertMany(thought);

    console.table(user);
    console.table(thought);
    console.info('Seeding Finished');
    process.exit(0);
});