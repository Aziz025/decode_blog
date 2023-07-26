const Blog = require('./blog')
const createBlog = (req , res) =>{
    if(req.file && req.body.title.length > 2 &&
        req.body.category > 2 &&
        req.body.description > 2)
        {
            // new Blog({
            //     title: req.body.title,
            //     description: req.body.description,
            //     category: req.body.category,
            //     image: `${req.file.destination}/${req.file.filename}`
            // }).save()
            res.redirect(`/addBlog`)
        }else{
            res.redirect('/addBlog?error=1')
        }
}

module.exports = {
    createBlog
}