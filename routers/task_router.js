const express = require('express');

const Tasks = require('../models/task_model');

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.find()
        .then( tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
})

router.post('/', (req, res) => {
    const taskData = req.body;

    Tasks.add(taskData)
        .then(task => {
            res.status(201).json(project);
          })
        .catch(err => {
            res.status(500).json({message: 'Failed to add new project'})
        })
})

module.exports = router;