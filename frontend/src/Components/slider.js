import axios from "axios";
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Slider = () => {
  const [images,setImages] = useState([""]);
  useEffect(()=>
  {
    const fetchData = async() =>{
    try{
        const result = await axios.get("http://localhost:5000/api/properties/primaryimage");
        setImages(result.data);


    } catch(err)
    {
        console.log(err);
    }
    };
    fetchData();
  },[])
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-md h-[466px] w-[466px] m-auto py-16 relative group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 md:max-w-2xl ">
      <div
        style={{ backgroundImage:`url(${images[currentIndex].primary_image})` }}
        className="w-[466px] h-[466px] rounded-full bg-center bg-cover duration-500 border-2 border-blue-900"
      ></div>
      {/* left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Slider;
