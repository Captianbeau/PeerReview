const { Schema, Types } = require('mongoose');

const reactionsSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            max_length: 280,
        },
        username: {
            type: String,
            
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        }

    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionsSchema;