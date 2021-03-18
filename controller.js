let dogModel = require('./model')

let controller = {
    create(request, response) {
        let dogs = request.body
        dogModel
        .create(dogs)
        .then(dogs => response.json({dogs}))
    },

    read(request, response) {
        dogModel
        .find({})
        .then(dogs => response.json(dogs))
    },

}

module.exports = controller