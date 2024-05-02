import Image from 'next/image'
import React from 'react'
import { prImg1 } from '../../../../../public/images'
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import Link from 'next/link';

interface PropertyCardInterface{
    label?: string, 
    image?: string,
    description?: string
}

const PropertyCard:React.FC<PropertyCardInterface> = ({ label, image, description }) => {
  return (
    <Link href="/ItemDetails" className="productCard">
      <figure className="productCardImg">
        <Image src={prImg1} alt="pr1" />
        <button className='favIcon'>
        <IoHeartOutline />
        {/* <IoHeartSharp /> */}
        </button>
      </figure>
      <div className="productCardBoy">
        <h3 className="itemPrice">₹ 2,25,000</h3>
        <h4 className="distance">3.0 km</h4>
        <h5 className="prdTitle textLimit l1">Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h5>
        <p className="location textLimit l1">Airport Road, Ahmedabad</p>
      </div>
    </Link>  
  )
}

export default PropertyCard