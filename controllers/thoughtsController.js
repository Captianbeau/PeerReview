const {Thought, User} = require('../models');

module.exports = {

    async getThoughts(req,res){
        try{
            const thoughts = await Thoughts.find().populate('thought');
            res.json(thoughts)
        }catch(err){
            res.status(500).json(err);
        }
    },

    async getOneThought(req,res){
        try{
            const thought = await Users.findOne({_id: req.params._id});

            if(!thought){
                return res.status(404).json({ message:'Thought not found.'});
            }
            res.json(thought);
        }catch(err){
            res.status(500).json(err);
        }
    },

    async createThought(req,res){

    },

    async deleteThought(req,res){

    },

    async updateThought(req,res){

    }

}