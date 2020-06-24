require('dotenv').config()

const express = require("express");

const app = express();
const path = require("path");

const router = require('./router.js')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require("body-parser")




app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../build')));



//routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.use('/', router)



app.listen(8080, () => console.log('Server Is runnign homie'))
