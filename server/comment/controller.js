const Comment = require('./comment')
const createComment = async (req, res) => {
  console.log(req.body)
  if(
    req.body.text.length > 0 &&
    req.body.authorId.length > 0 &&
    req.body.blogId.length > 0 
  )
  {
    console.log('work')
    await new Comment({
      text: req.body.text,
      blogId:  req.body.blogId,
      authorId: req.body.authorId,
    }).save()
    res.status(200).send('ok')
    }else{
        res.redirect('/addBlog?error=1')
    }
}

module.exports = {createComment}