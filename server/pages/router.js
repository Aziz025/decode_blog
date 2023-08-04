const express = require('express')
const router = express.Router()
const Genres = require('../Genres/genre')
const User = require('../auth/User')
const Blog = require('../Blogs/blog')

router.get('/' , async(req, res) => {
    const allGenres = await Genres.find()
    const blogs = await Blog.find().populate('category').populate('author')
    res.render("index" , {genres: allGenres , user: req.user ? req.user: {} , blogs})
})

router.get('/profile/:id' , async(req, res) => {
    const user = await User.findById(req.params.id)
    const blogs = await Blog.find().populate('category').populate('author')
    if(user){
        res.render("profile" , {user: user , user: req.user ? req.user: {} , loginUser: req.user , blogs: blogs})
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

router.get('/edit/:id' , async(req, res) => {
    const allGenres = await Genres.find()
    const blog = await Blog.findById(req.params.id)
    res.render("edit" , {user: req.user ? req.user: {} , genres: allGenres , blog})
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
