const router = require('express').Router();
const studentRouter = require('./student');
const campusRouter = require('./campus');

router.use('/student', studentRouter);
router.use('/campus', campusRouter);

module.export = router;

// SEEMINGLY UNNECESSARY
