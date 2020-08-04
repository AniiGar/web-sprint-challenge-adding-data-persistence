const express = require('express');

const Resources = require('../models/resource_model');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.find()
        .then( resources => {
            res.json(resources)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
})

router.post('/', (req, res) => {
    const resourceData = req.body;

    Resources.add(resourceData)
        .then(resource => {
            res.status(201).json(resource);
          })
        .catch(err => {
            res.status(500).json({message: 'Failed to add new resource'})
        })
})

module.exports = router;