const {Schema, Types} = require('mongoose');
//This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.
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
);

module.exports = reactionsSchema;