const express = require('express');
const cors = require('cors');
const app = express();
const apiPort = 8000;

const db = require('./db');
const propertyRouter = require('./routes/property-router');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api', propertyRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
