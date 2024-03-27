const router = require('express').Router();

const {
    getUsers,
    getOneUser
} = require('../../controllers/userController.js');

router.route('/').get(getUsers);

router.route('/:_id')
.get(getOneUser);

module.exports = router;