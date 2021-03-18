let mongoose = require('mongoose')

let dogSchema = new mongoose.Schema({
    id: Number,
    image: {
        height: Number,
        id: String,
        url: String,
        width: Number
    },
    life_span: String,
    name: String,
    origin: String,
    reference_image_id: String,
    temperament: String,
    weight: {
        imperial: String,
        metric: String
    }
},
    {
        bred_for: String,
        breed_group: String,
        height: {
            imperial: String,
            metric: String
        },
})

let Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog