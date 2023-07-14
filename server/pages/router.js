const express = require('express')
const router = express.Router()
const Genres = require('../genres/genres')

router.get('/' , async(req, res) => {
    const allGenres = await Genres.find()
    res.render("index" , {genres: allGenres , user: req.user ? req.user: {}})
})

router.get('/profile/:id' , (req, res) => {
    res.render("profile" , {user: req.user ? req.user: {}})
})

router.get('/login' , (req, res) => {
    res.render("login" , {user: req.user ? req.user: {}})
})

router.get('/register' , (req, res) => {
    res.render("register" , {user: req.user ? req.user: {}})
})

router.get('/addblog' , (req, res) => {
    res.render("addBlog" , {user: req.user ? req.user: {}})
})

router.get('/comment' , (req, res) => {
    res.render("comment" , {user: req.user ? req.user: {}})
})

router.get('/not-account' , (req, res) => {
    res.render("not-account")
})


module.exports = router
