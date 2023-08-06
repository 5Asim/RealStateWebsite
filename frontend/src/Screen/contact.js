import React from "react";
import Axios from "axios";
import { useState } from "react"
const ContactScreen = () => {

  const [first_name,setFirstName] = useState(" ");
  const [last_name,setLastName] = useState(" ");
  const [email,setEmail] = useState(" "); 
  const [phone_number,setPhoneNumber] = useState(" ");
  const [message,setMessage] = useState(" ");
  const submitHandler = async(e) =>
  {
    e.preventDefault();
    try{
      const {data} = await Axios.post("/contact",
      {
        first_name, last_name, email,phone_number,message
      });
      console.log(data);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    }catch(err)
    {
      alert(err)
    }
  }
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex justify-between">
        <div className="flex-1">
          <form className=""  >
            <div className="grid gap-4">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                First name
              </label>
              <input
                type="text"
          
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="John"
                value={first_name}
                onChange={(e)=>setFirstName(e.target.value)}
                required
              />
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Last name
              </label>
              <input
                type="text"
                
                value={last_name}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Walk"
                onChange={(e)=>setLastName(e.target.value)}
                required
              />
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="john@example.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
              <label
                for="contact_number"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Contact Number
              </label>
              <input
                type="number"

                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="12345678"
                value={phone_number}
                onChange={(e)=>setPhoneNumber(e.target.value)}
                required
              />
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <textarea
              
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here..."
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
              ></textarea>
            <button onClick={submitHandler} className="w-1/4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 my-4 bg-blue-700 hover:bg-blue-900 text-white text-xl font-nav font-semibold py-2 px-8 rounded-full">Sumbit</button>
            </div>
            
          </form>
        </div>

        <div className="flex-0">
          <img
            className="object-scale-down "
            src="https://st.depositphotos.com/1265075/3330/i/450/depositphotos_33303183-stock-photo-web-contact-us-icons-on.jpg"
            alt="contact_image"
          />
        </div>
      </div>
    </div>
  );
};
export default ContactScreen;
