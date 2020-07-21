require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router.js');

const app = express();

app.use(cors())
  .use(morgan('tiny'))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));

// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.use('/', router);

app.listen(8080, () => console.log('Server Is runnign homie'));
