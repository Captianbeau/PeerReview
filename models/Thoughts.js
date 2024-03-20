const {Schema, Types} = require('mongoose');

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
        
    }
);

module.exports= thoughtsSchema;