const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes =require('./ThoughtsRoutes');
const reactionsRoutes= require('./ReactionsRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/reactions', reactionsRoutes);

module.exports = router;