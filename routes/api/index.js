const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes =require('./ThoughtsRoutes');


router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);


module.exports = router;