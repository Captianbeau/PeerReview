const router = require('express').Router();

const {
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
    addFriend,
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router.route('/:_id')
.get(getOneUser)
.delete(deleteUser);

router.route('/:_id/friends').post(addFriend);

module.exports = router;