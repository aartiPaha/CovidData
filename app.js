const express = require('express')
const helmet = require('helmet')
const app = express()
const cors = require('cors')

const RGrouter = require('./routes')
// security
app.use(helmet())

app.use(cors())

// convert everything to json
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api',RGrouter)

module.exports = app