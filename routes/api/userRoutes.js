const router = require('express').Router();

const {
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router.route('/:_id')
.get(getOneUser)
.delete(deleteUser)
.put(updateUser);

router.route('/:_id/friends').post(addFriend);

router.route('/:_id/friends/:friendId').delete(deleteFriend)

module.exports = router;