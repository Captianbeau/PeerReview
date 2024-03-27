const {Thought, User} = require('../models');

module.exports = {

    async getUsers(req,res){
        try{
            
            const user = await User.find();
            
            res.json(user)

        }catch(err){
            res.status(500).json(err);
        }
    },

    async getOneUser(req,res){
        try{
            const user = await User.findOne({_id: req.params._id}).populate('thoughts');

            if(!user){
                return res.status(404).json({ message:'User not found.'});
            }
            res.json(user);
        }catch(err){
            res.status(500).json(err);
        }
    },

    async createUser(req,res){
        
try{
    
    const user = await User.create(req.body);
    console.log(user)
    res.json(user)
}catch(err){
    res.status(500).json(err)
}
    },

    async deleteUser(req,res){
try{
    const user = await User.findOneAndDelete({_id: req.params._id});
    console.log(user)
    if(!user){
        return res.status(404).json({message:'User not found'});
    }
    // const thoughts = await Thought.findOneAndRemove(
    //     {thought: req.params.username},
    //     {}
    // )
    res.json({message: 'User Deleted'});
}catch(err){
    console.log(err)
    res.status(500).json(err);
}
    },

    // async addFriend(req,res){

    // },
    // async deleteFriend(req,res){

    // },
}