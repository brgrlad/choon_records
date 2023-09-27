require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require('mongoose')


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

connecting()

app.use('/product', productRouter)
app.use('/admin', adminRouter)
app.use('/user', userRouter)


app.listen(4004, () => {
  console.log("connected to port 4004");
});


