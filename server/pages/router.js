const express = require('express')
const router = express.Router()
const Genres = require('../Genres/genre')
const User = require('../auth/User')
const Blog = require('../Blogs/blog')

router.get('/' , async(req, res) => {
    const options = {}
    const categ = await Genres.findOne({key : req.query.category})
    if(categ){
        options.category = categ._id
        res.locals.category = req.query.category
    }
    let page = 0
    const limit = 3
    if(req.query.page && req.query.page > 0){
        page = req.query.page
    }
    const totalBlogs = await Blog.count(options)
    const allGenres = await Genres.find()
    const blogs = await Blog.find(options).limit(limit).skip(page * limit).populate('category').populate('author')
    res.render("index" , {genres: allGenres , user: req.user ? req.user: {} , blogs , pages : Math.ceil(totalBlogs / limit)})
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

router.get('/comment/:id' , async(req, res) => {
    const user = await User.findById(req.params.id)
    const blogs = await Blog.find().populate('category').populate('author')
    const allGenres = await Genres.find()
    res.render("comment" , {user: user , user: req.user ? req.user: {} , genres: allGenres , loginUser: req.user , blogs: blogs})
})

router.get('/not-account' , async(req, res) => {
    const allGenres = await Genres.find()
    res.render("not-account" , {genres: allGenres})
})


module.exports = router
