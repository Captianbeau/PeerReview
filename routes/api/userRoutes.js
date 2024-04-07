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

// get and post
router.route('/').get(getUsers).post(createUser);

//get by id, delete, and put
router.route('/:_id')
    .get(getOneUser)
    .delete(deleteUser)
    .put(updateUser);

//post friend
router.route('/:_id/friends').post(addFriend);

//delete friend
router.route('/:_id/friends/:friendId').delete(deleteFriend)

module.exports = router;