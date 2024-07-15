import express from 'express';
import morgan from 'morgan'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()


const app = express();
const PORT = process.env.PORT ||4500

 app.use(express.json());
 app.use(morgan("dev"));


app.get('/', (req, res) => {
    res.json("Hello");
})

mongoose.connect(process.env.MONDODBURI)
.then(()=>{
    console.log("Connected to MongoDB")
    app.listen(PORT ,()=>{
        console.log(`Listening on port ${PORT}`);
    })
})

