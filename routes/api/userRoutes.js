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
.delete(deleteUser)
.put(addFriend);

// router.route('/:_id/friends').post()

module.exports = router;