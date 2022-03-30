const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const votersRouter = require('./voters-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/voters', votersRouter)

server.get('/', (req, res) => {
    res.send('<h1>Server is working!</h1>')
});

module.exports = server
