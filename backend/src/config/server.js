'use strict'
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

const port = normalizePort(process.env.PORT || '3003')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json({
    limit: '5mb'
}))
server.use(allowCors)
server.use(queryParser())

function normalizePort(val) {
    const port = parseInt(val, 10)
  
    if (isNaN(port)) {
      return val;
    }
  
    if (port >= 0) {
      return port
    }
  
    return false
}
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server