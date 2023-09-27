const express = require("express");
const app = express();
const router =  require("./routes/routes")
const mongoose = require('mongoose')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



async function connecting() {
    try{
        await mongoose.connect('mongodb://127.0.0.1/newdatabase')
        console.log('connected do DB')
    } catch (error) {
        console.log(error)
    }

}

connecting()

app.use('/', router)

app.listen(4004, () => {
  console.log("connected to port 4004");
});


