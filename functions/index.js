const functions    = require('firebase-functions');
const express      = require("express");
const app          = express();
const path         = require("path");
//const router       = require('./router.js')
const cors         = require('cors')
const bodyParser   = require("body-parser")
const admin        = require('firebase-admin')
admin.initializeApp()



app.use(cors({origin: true}))
   .use(bodyParser.urlencoded({extended: true}))
   .use(bodyParser.json())

   console.log(functions.config().stripe)



//app.use('/', router)


//app.listen(8080, () => console.log('Server Is runnign homie'))




exports.app = functions.https.onRequest(app)

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
