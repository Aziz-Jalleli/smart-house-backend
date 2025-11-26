const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const sensorRoutes = require('./routes/sensorRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/smarthouse')
  .then(() => console.log("MongoDB connecté ✅"))
  .catch(err => console.log(err));


app.use('/api/sensor', sensorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => console.log(`API en ligne sur port ${PORT}`));


