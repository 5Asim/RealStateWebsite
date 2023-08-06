import axios from "axios";
import React, { useEffect, useReducer } from "react";
import PropertyBox from "../Components/box";
import LoadingBox from "../Components/loadingbox";


const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return { ...state, loading: false };
      case "FETCH_SUCCESS":
        return { ...state, properties: action.payload, loading: false };
      case "FETCH_FAIL":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
}
const BuyScreen =() =>
{
    const [{ loading, error, properties }, dispatch] = useReducer(reducer, {
        properties: [],
        loading: true,
        error: "",
      });
    
      useEffect(() => {
        const fetchData = async () => {
          dispatch({ type: "FETCH_REQUEST" });
          try {
            const result = await axios.get("http://localhost:5000/api/properties/buy");
            dispatch({ type: "FETCH_SUCCESS", payload: result.data });
          } catch (err) {
            dispatch({ type: "FETCH_FAIL", payload: err });
          }
        };
        fetchData();
      }, []);
    return(
        <section className="max-w-screen-xl mx-auto p-4">
            <div className=" my-20 text-center">
                <p className="font-dmSans text-5xl font-bold">
                    Find Your Perfect Home
                </p>
            </div>
            <div className="flex flex-wrap">
            {loading ? (
            <LoadingBox/>
             ) : error ? (
             console.log(error.data)
            ) : (
            properties.map((property)=>(
                
                <PropertyBox key={property._id} property={property}/>
            )))}
            </div>
        </section>
    )
}
export default BuyScreen;