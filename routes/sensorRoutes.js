const express = require('express');
const router = express.Router();
const Sensor = require('../models/Sensor');

router.post('/', async (req, res) => {
  try {
    const sensor = new Sensor(req.body);
    await sensor.save();
    res.json({ message: "Données enregistrées !" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await Sensor.find().sort({ timestamp: -1 }).limit(50);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
