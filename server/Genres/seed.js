const Genres = require('./genre');

const data = [
    'Прогнозы в IT',
    'Веб-разработка',
    'Мобильная разработка',
    'Фриланс',
    'Алгоритмы',
    'Тестирование IT систем',
    'Разработка игр',
    'Дизайн и юзабилити',
    'Искуственный интелект',
    'Машинное обучение'
]

async function writeDataGenre(){
    
    const length = await Genres.count();
    if(length == 0){
        data.map((item , index)=>{
            new Genres({
                name: item,
                key: index
            }).save()
        })
    }
}

module.exports = writeDataGenre