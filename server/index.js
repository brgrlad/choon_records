require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path');


app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const productRouter =  require("./routes/productRouter")
const adminRouter =  require("./routes/adminRouter")
const userRouter =  require("./routes/userRouter")


async function connecting() {
    try{
        // await mongoose.connect('mongodb://127.0.0.1/newdatabase')
        await mongoose.connect(process.env.DB_KEY)
        console.log('connected do DB')
    } catch (error) {
        console.log(error)
    }

}



app.use('/products', productRouter)
app.use('/admin', adminRouter)
app.use('/user', userRouter)


//serve buld folder to front-end
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

connecting().then(() => {
    app.listen(4004, () => {
        console.log("conected to 4004");
    })
})



