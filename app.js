const express = require('express')
const helmet = require('helmet')
const app = express()

const RGrouter = require('./routes')
// security
app.use(helmet())

// convert everything to json
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api',RGrouter)

module.exports = app