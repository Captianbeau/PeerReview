const { Thought, User } = require('../models');

module.exports = {

    //gets all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find().populate('user').populate('reactions');

            res.status(200).json(thoughts)
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //gets one thought
    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params._id }).populate('user');

            if (!thought) {
                return res.status(404).json({ message: 'Thought not found.' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //creates thought and adds to id user
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body._id },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
            )

            if (!user) {
                return res.status(404).json({ message: 'thought made but user not found' })
            }

            res.json('thought created')
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //deletes thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params._id });

            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' })
            }
            
            res.json({ message: 'Thought Deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //updates thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params._id },
                { $set: req.body },
                { new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'thought not found' })
            }

            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    }

}