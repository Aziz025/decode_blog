const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new mongoose.Schema({
    text: String,
    blogId: {type: Schema.Types.ObjectId , ref: 'blog'},
    authorId: {type: Schema.Types.ObjectId , ref: 'user'},
    timestamps: {
        date: 'date'
    }
})

module.exports = mongoose.model('comment' , CommentSchema)