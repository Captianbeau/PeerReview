const {Schema, Types} = require('mongoose');

const userSchema = new Schema(
    {
        userId:{
            type:Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
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
            validate:
        }
    }
)