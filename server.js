const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const sensorRoutes = require('./routes/sensorRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://azizjallali99_db_user:0KdEGBYvyJfGsrTi@cluster0.lcjuawi.mongodb.net/smarthouse?retryWrites=true&w=majority')
  .then(() => console.log("MongoDB Atlas connecté ✅"))
  .catch(err => console.log(err));


app.use('/api/sensor', sensorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => console.log(`API en ligne sur port ${PORT}`));


