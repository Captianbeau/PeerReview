const {Schema, Types} = require('mongoose');

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
    }
);

module.exports = userSchema;