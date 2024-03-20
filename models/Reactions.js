const {Schema, Types} = require('mongoose');

const reactionsSchema = new Schema(
    {
        reactionId:{
            type:Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody:{
            type:String,
            required:true,
            max_length:280,
        },
        
    }
)