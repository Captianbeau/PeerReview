// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
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
        friends:[{type: Schema.Types.ObjectId, ref: 'users'}],
    }
);

const Users = model('users', userSchema);

module.exports = Users;