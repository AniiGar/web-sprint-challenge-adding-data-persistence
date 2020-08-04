const express = require('express');
const helmet = require('helmet');

// Declare routers 

const server = express()

server.use(helmet());

server.use(express.json());

// Add server.use(routers)