const express = require('express');
const router = express.Router();

const Sport = require('../models/sport');


router.get('/', async (req, res) => {
    try {
        const sports = await Sport.find();
        res.status(200).json(sports);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

router.get('/:id', async (req, res) => {
    try {
       const sport = await Sport.findById(req.params.id);
       if (!sport) {
            return res.status(404).json({ message: 'Sport not found' });
        }
        res.status(200).json(sport);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    const { name, image } = req.body;
    const newSport = new Sport({ name, image });

    try {
        const savedSport = await newSport.save();
        res.status(200).json(savedSport);

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

module.exports = router;