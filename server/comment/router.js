const express = require('express')
const router = express.Router();
const {createComment} = require('./controller')


router.post('/api/comment', createComment)

module.exports = router