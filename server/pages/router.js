const express = require('express')
const router = express.Router()
const Genres = require('../genres/genres')

router.get('/' , async(req, res) => {
    const allGenres = await Genres.find()
    res.render("index" , {genres: allGenres})
})

router.get('/profile' , (req, res) => {
    res.render("profile")
})

router.get('/login' , (req, res) => {
    res.render("login")
})

router.get('/register' , (req, res) => {
    res.render("register")
})

router.get('/addblog' , (req, res) => {
    res.render("addBlog")
})

router.get('/comment' , (req, res) => {
    res.render("comment")
})

router.get('/not-account' , (req, res) => {
    res.render("not-account")
})


module.exports = router
