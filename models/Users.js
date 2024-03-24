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
                validator: (input) => {
                    return `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`.test(input);
                },
                message: `Needs a valid email`,
            },
        },
        thoughtsS: [{ type: Schema.Types.ObjectId, ref: 'thought' }],
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

userSchema.virtual('friendCount').get(() => {
    return this.friends.length;
});

const Users = model('users', userSchema);

module.exports = Users;