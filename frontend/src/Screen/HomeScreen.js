
import React from "react";

import Slider from "../Components/slider";


const HomeScreen = () => {
 

  return (
    <div className="max-w-screen-xl mx-auto p-4   my-20 grid gap-8 md:flex md:justify-between">
      <div className="my-48">
        <h1 className="font-dmSans text-5xl font-bold">Find Your</h1>
        <h1 className=" font-dmSans text-5xl font-bold text-blue-900 my-2">
          Perfect Home
        </h1>
        <p className="font-dmSans text-xl w-8/12">Something about your company that testifies your products and their
          values and something somone is telling to others</p>
        <h3>
          
        </h3>

        <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 my-4 bg-blue-700 hover:bg-blue-900 text-white text-xl font-nav font-semibold py-2 px-8 rounded-full">Explore</button>
      </div>
      <div>
      
        (
            <div>
            <Slider/>
            </div>
        )
      
      </div>
      
    </div>
  );
};
export default HomeScreen;
