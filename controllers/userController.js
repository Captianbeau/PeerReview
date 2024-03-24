const {Thought, User} = require('../models');

module.exports = {

    async getUsers(req,res){
        try{
            const users = await User.find();
            res.json(users)
        }catch(err){
            res.status(500).json(err);
        }
    },

    // async getOneUser(req,res){
    //     try{
    //         const user = await Users.findOne({_id: req.params._id}).populate('thoughts');

    //         if(!user){
    //             return res.status(404).json({ message:'User not found.'});
    //         }
    //         res.json(user);
    //     }catch(err){
    //         res.status(500).json(err);
    //     }
    // },

    // async createUser(req,res){

    // },

    // async deleteUser(req,res){

    // },

    // async addFriend(req,res){

    // },
    // async deleteFriend(req,res){

    // },
}