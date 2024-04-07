const router = require('express').Router();

const {
    getThoughts,
    getOneThought,
    createThought,
    deleteThought,
    updateThought
} = require('../../controllers/thoughtsController');

// get and post
router.route('/').get(getThoughts).post(createThought);

//get by id, delete and put
router.route('/:_id')
    .get(getOneThought)
    .delete(deleteThought)
    .put(updateThought);

module.exports = router;