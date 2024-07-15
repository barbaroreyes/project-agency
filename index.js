import express from 'express';
import morgan from 'morgan'



const app = express();
const PORT = 4500

 app.use(express.json());
 app.use(morgan("dev"));
 
app.get('/', (req, res) => {
    res.json("Hello");
})


app.listen(PORT ,()=>{
    console.log(`Listening on port ${PORT}`);
})