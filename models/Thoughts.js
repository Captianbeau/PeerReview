// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
const { Schema, model } = require('mongoose');
const reactionsSchema = require('./Reactions');

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required:true,
        },
        reactions: [reactionsSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtsSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('thought', thoughtsSchema);

module.exports = Thought;