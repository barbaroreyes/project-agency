const express =require('express');
const  morgan = require('morgan')
const mongoose =require('mongoose');
const cors = require('cors')
const dotenv = require('dotenv'); 
const routerAgency = require('./src/routes/agenciesRoutes') 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4500;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

app.use("/api",routerAgency );
mongoose.connect(process.env.MONDODBURI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB", err);
  });
