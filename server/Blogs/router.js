const express = require('express')
const router = express.Router()
const {upload} = require('./multer')
const {createBlog} = require('./controller')
const {isAuth} = require('../auth/middlewares')
router.post('/api/addBlog' , isAuth ,  upload.single('image') , createBlog)

module.exports = router