function sendComment(e){
    const comment_text = document.querySelectorAll('#comment-text').value
    const author = document.querySelector('#comment_author').value
    const blog = document.querySelector('#comment_blog').value

}

if(comment_text.length > 0){
    axios.post('/api/comment' , {text: comment_text.length , authorId: author , blogId: blog})
}