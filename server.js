const express = require('express');

const db = require('./data/projects.db3');

const server = express();

// Declare router here

server.use(express.json());

// server.use( Add router here )

server.get('/', (req, res) => {
    res.json({ message: 'Server running' })
})

module.exports = server;