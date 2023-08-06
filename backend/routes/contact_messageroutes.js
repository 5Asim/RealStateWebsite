import express from "express";
import expressAsyncHandler from "express-async-handler";
import Contact from "../model/contact_message.js";
import mongoose from "mongoose";

const contactRouter = express.Router();

contactRouter.get("/contact",async (req,res)=>
{
    try{
        const contactMessage = await Contact.find();
        res.send(contactMessage);
    }
    catch(errr)
    {
        console.log(err);
        res.status(500).send({ message: 'Internal Server Error' });
    }   
   

})

contactRouter.post("/contact",async (req,res)=>
{
    const {first_name, last_name, email,phone_number,message} =req.body;
    try
    {
        const newcontact = new Contact (
            {
                first_name,
                last_name,
                email,
                phone_number,
                message,
            }
        );
        const createdContact = await newcontact.save();

        res.status(201).send({
            _id: createdContact._id,
            first_name: createdContact.first_name,
            last_name: createdContact.last_name,
            email: createdContact.last_name,
            phone_number: createdContact.phone_number,
            message: createdContact.message,
        });
    }catch(err)
    {
        console.log(err);
        res.status(500).send({ message: 'Internal Server Error' });
    }
})
export default contactRouter;