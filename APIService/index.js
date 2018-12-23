const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const connection = require('./models/connection');

// initial express
const app = express();
const PORT = process.env.PORT || 3131;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes

const task = require('./routes/task.route');

connection.connect();

app.use('/api/v1', task);

// run server on port 3000
app.listen(PORT, () => {
    console.log('SERVER IS RUNNING at port '.cyan + PORT);
  })