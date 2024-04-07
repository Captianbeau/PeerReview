const { Thought, User } = require('../models');

module.exports = {

    //get all users
    async getUsers(req, res) {
        try {

            const user = await User.find();

            res.json(user)

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //get user by id
    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params._id }).populate('thoughts');

            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //creates user
    async createUser(req, res) {

        try {

            const user = await User.create(req.body);
        
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //updates user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params._id },
                { $set: req.body },
                { new: true }
            )

            if (!user) {
                return res.status(404).json({ message: 'user not found' })
            }

            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //deletes user and thoughts
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params._id });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const deleteThoughts = user.thoughts;

            for (tempThought of deleteThoughts) {
                await Thought.findOneAndDelete({ _id: tempThought._id })
            }

            res.json({ message: 'User Deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //adds a friend to user
    async addFriend(req, res) {

        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params._id },
                { $addToSet: { friends: req.body } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'user not found' });
            }

            res.json('friend added')
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //deletes friend from user
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params._id },
                { $pull: { friends: req.params.friendId } },
                { runValidators: true }
            )

            if (!user) {
                return res.status(404).json({ message: 'user not found' })
            }

            res.json('friend deleted');

        } catch (err) {
            res.status(500).json(err);
        }
    },
}