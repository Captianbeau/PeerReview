const router = require('express').Router();

const {
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router.route('/:_id')
.get(getOneUser)
.delete(deleteUser);

module.exports = router;