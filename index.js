const http = require('http')
const app = require('./app')

const port = process.env.PORT || 5000
// console.log('jwt', process.env.MONGODB_CONNECTON_PWD)

const server = http.createServer(app)
server.listen(port, () => {
  console.log(`local server started on http://localhost:${port}`)
})
