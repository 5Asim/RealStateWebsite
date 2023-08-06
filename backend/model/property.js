import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
    {
      title: { type: String, required: true, unique: true },
      primary_image: { type: String, required: true },
      secondary_images: [{ type: String, required: true }],
      description: { type: String, required: true },
      price: { type: String, required: true },
      location: { type: String, required: true },
      landarea: { type: Number, required: true },
      room: { type: Number, required: true },
      bathroom: { type: Number, required: true },
      parking: { type: Number, required: true },
      status: { type: String, enum: ["Rent", "Buy"], required: true}

    },
    {
      timestamps: true
    }
  );
  
const Property = mongoose.model('Property',propertySchema);
export default Property;