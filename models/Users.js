// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {

        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function(input) {
                    return  /.+@.+\..+/.test(input);
                },
                message: `Needs a valid email`,
            },
        },
        thoughts:[
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            }
        ],
        // self reference friends?
        friends: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;