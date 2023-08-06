import express from "express";
import expressAsyncHandler from "express-async-handler";
import Property from "../model/property.js";
import mongoose from "mongoose";

const propertyRouter = express.Router();

propertyRouter.get("/api/properties", async (req, res) => { 
  const properties = await Property.find();
  res.send(properties);
});

propertyRouter.get("/api/properties/primaryimage", async (req, res) => {
  try {
    const count = await Property.countDocuments(); 

    const randomIndex = Math.floor(Math.random() * count);

    
    const primary_images = await Property.find(
      {},
      { _id: 0, primary_image: 1 },
      { skip: randomIndex, limit: 5 } 
    );

    res.send(primary_images);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

propertyRouter.get("/api/properties/rent",async(req,res)=>
{
  try{
    const properties = await Property.find({status:'Rent'});
    res.send(properties);

  }catch(error)
  {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

propertyRouter.get("/api/properties/buy",async(req,res)=>
{
  try{
    const properties = await Property.find({status:'Buy'});
    res.send(properties);

  }catch(error)
  {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

propertyRouter.get("/api/properties/:id", async (req, res) => {
   try {
    const { id: id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) 
      return res.status(404).json({ msg: `No task with id :${id}` 
    });
    const property = await Property.findById({_id:id});

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    const { primary_image, secondary_images } = property;
    const images = [primary_image, ...secondary_images];
    const updatedProperty = { ...property.toObject(), images }; // Spread operator here

    res.json(updatedProperty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



// propertyRouter.post(
//   "/create",
//   expressAsyncHandler(async (req, res) => {
//     const {
//       title,
//       primary_image,
//       secondary_images,
//       description,
//       price,
//       location,
//       landarea,
//       room,
//       bathroom,
//       parking,
//     } = req.body;
//     const newProperty = new Property({
//       title,
//      primary_image,
//       secondary_images,
//       description,
//       price,
//       loaction,
//       landarea,
//       room,
//       bathroom,
//       parking,
//     });
//     const createdProperty = await newProperty.save();
//     res.status(201).send({
//       _id: createdProperty._id,
//       title: createdProperty.title,
//       primary_image: createdProperty.primary_image,
//       secondary_images: createdProperty.secondary_images,
//       description: createdProperty.description,
//       price: createdProperty.price,
//       location: createdProperty.location,
//       landarea: createdProperty.landarea,
//       room: createdProperty.room,
//       bathroom: createdProperty.bathroom,
//       parking: createdProperty.parking,
//     });
//   })
// );


export default propertyRouter;