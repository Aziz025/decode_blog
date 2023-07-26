const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: {type: Schema.Types.ObjectId , ref: 'Genre'},
    image: String
})

module.exports = mongoose.model('blog' , BlogSchema)