const express = require('express');
const helmet = require('helmet');

// Declare routers 
const projectsRouter = require('./routers/project_router');
const taskRouter = require('./routers/task_router');
const resourceRouter = require('./routers/resource_router');

const server = express()

server.use(helmet());

server.use(express.json());

// Add server.use(routers)
server.use('/api/projects', projectsRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);

module.exports = server;