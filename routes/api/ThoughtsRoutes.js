const router = require('express').Router();

const{
    getThoughts,
    getOneThought,
    createThought,
    deleteThought,
    updateThought
} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:_id')
.get(getOneThought)
.delete(deleteThought)
.put(updateThought);

module.exports = router;