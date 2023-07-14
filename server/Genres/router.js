const express = require('express')
const router = express.Router();
const {getAllGenres} = require('./controller')
const writeDataGenre = require('./seed')

writeDataGenre()

router.get('/api/genres' , getAllGenres)

module.exports = router