import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { BiLandscape } from "react-icons/bi";
import { MdOutlineBathroom } from "react-icons/md";
import { LuParkingCircle } from "react-icons/lu";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import ImageSlider from "../Components/ImageSlider";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, property: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const PropertyDetailScreen = () => {
  const params = useParams();
  const { id } = params;
  const [{ loading, error, property }, dispatch] = useReducer(reducer, {
    property: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(
          `http://localhost:5000/api/properties/${id}`
        );

        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div>
        <div>
          <div>
            <div className="max-w-3xl mx-auto ">

              {property.images && property.images.length > 0 ? (
                <ImageSlider images={property.images} />
              ) : (
                <p>Loading images...</p>
              )}
            </div>

            <div className=" text-2xl py-8">
              <div className="flex items-center justify-between">
                <p className="text-4xl font-bold mt-2 py-2 text-blue-900">
                  {property.title}
                </p>
                <div className="flex items-center gap-2 text-xl">
                  <FaLocationDot style={{ color: "orange" }} />
                  <p> {property.location}</p>
                </div>
              </div>
              <p>NRs. {property.price}</p>
              <div className="flex items-center gap-2">
                <BiLandscape style={{ color: "green" }} />
                <p> {property.landarea}</p>
              </div>
              <p className="py-4">{property.description}</p>
              <div>
                <div className="flex flex-col text-xl ">
                  <p className="flex items-center gap-2">
                    <MdOutlineBathroom style={{ color: "blue" }} /> Bathroom :{" "}
                    {property.bathroom}{" "}
                  </p>
                  <p className="flex items-center gap-2">
                    <LuParkingCircle style={{ color: "black" }} /> Parking :{" "}
                    {property.parking}{" "}
                  </p>
                  <p className="flex items-center gap-2">
                    <MdOutlineMeetingRoom style={{ color: "brown" }} /> Room :{" "}
                    {property.room}{" "}
                  </p>
                </div>
              </div>
              <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 my-4 bg-blue-700 hover:bg-blue-900 text-white text-xl font-nav font-semibold py-2 px-8 rounded-full">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyDetailScreen;
