// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
const {Schema, Types} = require('mongoose');
const reactionsSchema = require('./Reactions');

const thoughtsSchema = new Schema(
    {
        thoughtText:{
            type:String,
            required:true,
            max_length: 280,
        },
        createdAt:{
            type:Date,
            default:Date.now,
        },
        reactions:[reactionsSchema],
        
    }
);

const Thoughts = model('thoughts', thoughtsSchema);

module.exports= Thoughts;