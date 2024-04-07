const connection = require('../config/connection');
const { User, Thought } = require('../models');

//Data call
const { getUser, userData, thoughtData } = require('./data');

//connect error
connection.on('error', (err) => err);

//connect 
connection.once('open', async () => {
    console.log('seed start')

    //delete if collection exists
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }

    //compiles the data in data.js
    getUser()

    //creates collections
    const users = await User.insertMany(userData);
    const thoughts = await Thought.insertMany(thoughtData);

    //gives random user ids to thoughts and saves the thought ids to user
    for (newThought of thoughts){
        const tempUser = users[Math.floor(Math.random()* users.length)]
        tempUser.thoughts.push(newThought._id);
        await tempUser.save();
        newThought.user.push(tempUser._id);
        await newThought.save();

    } 

//tables collections in the console
    console.table(thoughts)
    console.table(users)
    console.info('Seeding Finished');
    process.exit(0);
});