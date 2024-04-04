const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getUser, userData, thoughtData } = require('./data');
//get data from data.js through require

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('seed start')

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }
    getUser()

    const users = await User.insertMany(userData);
    const thoughts = await Thought.insertMany(thoughtData);

    for (newThought of thoughts){
        const tempUser = users[Math.floor(Math.random()* users.length)]
        tempUser.thoughts.push(newThought._id);
        await tempUser.save();
        newThought.user.push(tempUser._id);
        await newThought.save();

        console.log(tempUser._id)
    } 





     
    

    console.table(users)
    console.info('Seeding Finished');
    process.exit(0);
});