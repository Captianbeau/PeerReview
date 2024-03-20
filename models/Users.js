const {Schema, Types} = require('mongoose');
const thoughtsSchema = require('./Thoughts');

const userSchema = new Schema(
    {

        username:{
            type:String,
            unique:true,
            required:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            validate:{
                
            }
        },
        thoughts:[thoughtsSchema],
        friends:[userSchema],
    }
);

module.exports = userSchema;