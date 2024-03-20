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

module.exports= thoughtsSchema;