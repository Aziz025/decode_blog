const Genres = require('./genre');


const getAllGenres = async(req , res) => {
    const data = await Genres.find()
    res.send({data})
}

module.exports = {getAllGenres}