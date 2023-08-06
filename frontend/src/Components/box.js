import {FaLocationDot} from 'react-icons/fa6'
import {FcMoneyTransfer} from 'react-icons/fc'
import React from "react";
import { Link } from 'react-router-dom';

const PropertyBox=(props)=>
{
    const { property} = props;
    return(
        <div className="w-full md:w-1/3 px-4 py-8 ">
            <Link to={`/property/${property._id}`}>
            <div className='transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105'>
            <img className="w-full h-[286px] object-cover object-center rounded-md" 
            // 
            src={property.primary_image} alt={property.title} />
            </div>
            </Link>
            <div>
            <h2 className="text-xl font-semibold mt-2 py-2">{property.title}</h2>
            <div className='flex items-center gap-2'>
            <FaLocationDot style={{color:'orange'}}/>
            <p>  {property.location}</p>
            </div>
            
            <div className='flex items-center gap-2'>
            <FcMoneyTransfer/>
            <p>  {property.price}</p>
            </div>
            </div>
           
        </div>
    )
}
export default PropertyBox;
