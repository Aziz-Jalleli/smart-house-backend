const mongoose = require('mongoose');

const SensorSchema = new mongoose.Schema({
  room: String,
  temperature: Number,
  humidity: Number,
  gas: Number,
  light: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sensor', SensorSchema);

