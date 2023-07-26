const express = require('express')
const router = express.Router()
const Genres = require('../Genres/genre')
const User = require('../auth/User')

router.get('/' , async(req, res) => {
    const allGenres = await Genres.find()
    res.render("index" , {genres: allGenres , user: req.user ? req.user: {}})
})

router.get('/profile/:id' , async(req, res) => {
    const user = await User.findById(req.params.id)
    if(user){
        res.render("profile" , {user: user , user: req.user ? req.user: {} , loginUser: req.user})
    }else{
        res.redirect('not-account')
    }
})

router.get('/login' , (req, res) => {
    res.render("login" , {user: req.user ? req.user: {}})
})

router.get('/register' , (req, res) => {
    res.render("register" , {user: req.user ? req.user: {}})
})

router.get('/addblog' , async(req, res) => {
    const allGenres = await Genres.find()
    res.render("addBlog" , {user: req.user ? req.user: {}, genres: allGenres})
})

router.get('/comment' , async(req, res) => {
    const allGenres = await Genres.find()
    res.render("comment" , {genres: allGenres , user: req.user ? req.user: {}})
})

router.get('/not-account' , async(req, res) => {
    const allGenres = await Genres.find()
    res.render("not-account" , {genres: allGenres})
})


module.exports = router
