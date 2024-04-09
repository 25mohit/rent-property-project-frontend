import Image from 'next/image'
import React from 'react'

interface PropertyCardInterface{
    label: string, 
    image: string,
    description: string
}

const PropertyCard:React.FC<PropertyCardInterface> = ({ label, image, description }) => {
  return (
    <div className='property-card'>
        <h1>{label}</h1>
        <p>{description}</p>
        {/* <Image src={image} alt='This is Card Image' width={100} height={100}/> */}
    </div>
  )
}

export default PropertyCard