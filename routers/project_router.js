const express = require('express');

const Projects = require('../models/project_model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
        .then( projects => {
            res.json(projects)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
})

router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.add(projectData)
        .then(project => {
            res.status(201).json(project);
          })
        .catch(err => {
            res.status(500).json({message: 'Failed to add new project'})
        })
})

module.exports = router;