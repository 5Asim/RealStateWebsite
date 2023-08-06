import mongoose  from "mongoose";
const contactSchema = new mongoose.Schema(
    {
        first_name : {type: String, required: true},
        last_name : {type: String, required: true},
        email : {type:String, required:true},
        phone_number: {type:String,required:true},
        message:{type:String},
    },
    {
        timestamps:true,
    }
)
const  Contact = mongoose.model('Contact',contactSchema);
export default Contact;