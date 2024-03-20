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
        thoughts:[{type: Schema.Types.ObjectId, ref:'thoughts'}],
        // self reference friends?
        friends:[{type: Schema.Types.ObjectId, ref: 'user'}],
    }
);

module.exports = userSchema;