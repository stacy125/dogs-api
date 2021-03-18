let mongoose = require('mongoose')
let dogModel = require('./model.js')
let dogJson = require('./data.json')
let connection = require('./database.js')

dogModel.deleteMany({})
    .then(() => {
        dogModel.create(dogJson)
        .then(dogs => {
            console.log(dogs, 'Dogs created');
            mongoose.disconnect()
        })
    })