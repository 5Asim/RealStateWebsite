import dotenv from 'dotenv';
import mongoose from 'mongoose';
import propertyRouter from './routes/propertyroutes.js';
import express from "express";
import cors from "cors"
import contactRouter from './routes/contact_messageroutes.js';

dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(()=>
{
    console.log('connected');
})
.catch((err)=>
{
    console.log(err);
})


const app = express();



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/', propertyRouter);
app.use('/',contactRouter);




app.use((err,req,res,next)=>
{
    res.status(500).send({message:err.message});
})


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
}) 