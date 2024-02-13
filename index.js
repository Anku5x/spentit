import express from "express";
import cors from "cors";
//import { MongoClient } from "mongodb"; --> mongo client is installed in this project, but not required.  
import morgan from "morgan";
import dotenv from "dotenv";
import ConnectionDB from './config/ConnectionDB.js'
import { userRouter } from './routes/userRoute.js'
import { transactionRouter } from './routes/transactionRoute.js'
import {deleteRouter} from './routes/deleteRoute.js'
import path from 'path'
import { dirname } from "path";
import { fileURLToPath } from "url";
//env configuration file
dotenv.config();
//main backend index.js connection with database

//REST API, using express: 
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
//middlewares right after importing express because of sync programming
//Middlewares in this project: Cors to send data to frontend, Morgan and JSON support pakage. 
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
//routes
//debugging: used ES5 require='/require' Syntex instead of importing router and then using it:
//userRouter: 
app.use("/api/v1/users", userRouter);
//transaction routes:
app.use('/api/v1/transactions/', transactionRouter);
//delete router:
app.use('/api/v1/delete/', deleteRouter);
//static files
app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, './client/build/index.html'));
})
//testing server
app.get('/server', async (req, res)=>{
  try{
    res.send('<h1>Server is on</h1>')
  }catch(err){
    console.log(err);
  }
});
//declaring port
const PORT = process.env.PORT;
//listening to server requests on port 
ConnectionDB().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server Started: ${PORT}`);
  });
});
