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
//env configuration file
dotenv.config();
//main backend index.js connection with database
ConnectionDB();
//REST API, using express: 
const app = express();
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
app.use(express.static(path.join(__dirname, './Client/build')));
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, './Client/build/index.html'));
})
//declaring port
const port = 8080 || process.env.port;
//listening to server requests on port 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
