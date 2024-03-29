const {Thought, User} = require('../models');

module.exports = {

    async getThoughts(req,res){
        try{
            const thoughts = await Thought.find();
            res.json(thoughts)
        }catch(err){
            res.status(500).json(err);
        }
    },

    async getOneThought(req,res){
        try{
            const thought = await Thought.findOne({_id: req.params._id});

            if(!thought){
                return res.status(404).json({ message:'Thought not found.'});
            }
            res.json(thought);
        }catch(err){
            res.status(500).json(err);
        }
    },

    async createThought(req,res){
        //add to User as well
        try{
            const thought = await Thought.create(req.body);
            const username = thought.thoughtText
            const user = await User.findOneAndUpdate(
                {username: username},
                {$addToSet: {thoughts:thought.thoughtText}}
                )
            res.json(thought, user)
        }catch(err){
            res.json(err)
        }
    },

    async deleteThought(req,res){
        try{
            const thought = await Thought.findOneAndDelete({_id: req.params._id});
            if(!thought){
                return res.status(404).json({message:'Thought not found'})
            }
            res.json({message:'Thought Deleted'});
        }catch(err){
            res.status(500).json(err);
        }
    },

    async updateThought(req,res){

    }

}