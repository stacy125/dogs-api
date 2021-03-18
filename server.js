let app = require('./app')


app.set('port', process.env.PORT || 5000)

let port = app.get('port')
console.log(port);

let server = app.listen(app.get('port'))


server.on('listening', () => console.log("Server is listening", ))
server.on('error', (error) => console.error("Server error", error))

module.exports = server