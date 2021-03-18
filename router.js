let express = require('express')
const controller = require('./controller')
let router = new express.Router()
let dogModel = require('./model')

router.get('/', (request, response) => {
    response.json({
        sentence: "Welcome to the Dogs info api click on the link",
        link: 'http://localhost:5000/dogs'
    })
})

router.get('/dogs', controller.read)
// router.post('/dogs', controller.create)

module.exports = router

