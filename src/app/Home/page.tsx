import React from "react";
import MultiContentLayout from "../components/HOC/Layout/MultiContentLayout";
import Image from "next/image";
import { electronic, furniture, property } from "../../../public/images";
import PropertyCard from "../components/Utils/PropertyCard/PropertyCard";
import { MdFilterAlt } from "react-icons/md";


const HomePage = () => {
  return (
    <>
    <MultiContentLayout>
      <div className="categoyList">
          <ul className="scroll2">
              <li>
                  <button className="link active">
                      <span><Image src={furniture} alt="furnture" className="icon" /></span>
                      <h5>Furniture</h5>    
                  </button>    
              </li>   
              <li>
                  <button className="link">
                  <span><Image src={property} alt="property" className="icon" /></span>
                      <h5>Properties</h5>    
                  </button>    
              </li>  
              <li>
                  <button className="link">
                  <span><Image src={electronic} alt="property" className="icon" /></span>
                      <h5>Electronic</h5>    
                  </button>    
              </li>   
              <li>
                  <button className="link">
                      <span><Image src={furniture} alt="furnture" className="icon" /></span>
                      <h5>Furniture</h5>    
                  </button>    
              </li>   
              <li>
                  <button className="link">
                  <span><Image src={property} alt="property" className="icon" /></span>
                      <h5>Properties</h5>    
                  </button>    
              </li>  
              <li>
                  <button className="link">
                  <span><Image src={electronic} alt="property" className="icon" /></span>
                      <h5>Electronic</h5>    
                  </button>    
              </li>  
          </ul> 
      </div>
     
      <div className="row listingProduct bottomSpace">
          <div className="titleBox">
            <div className="col"><h3 className="titleS">Nearest Products</h3></div>
            <div className="col text-right">
                <button className="filterBtn"><MdFilterAlt /> Filter</button>
            </div>
          </div>
          <div className="col-6"><PropertyCard /></div>
          <div className="col-6"><PropertyCard /></div>
          <div className="col-6"><PropertyCard /></div>
          <div className="col-6"><PropertyCard /></div>
          <div className="col-6"><PropertyCard /></div>
          <div className="col-6"><PropertyCard /></div>
          <div className="col-6"><PropertyCard /></div>
          <div className="col-6"><PropertyCard /></div>
          <div className="col-6"><PropertyCard /></div>
          <div className="col-6"><PropertyCard /></div>
          <div className="col-6"><PropertyCard /></div>
          <div className="col-6"><PropertyCard /></div>
      </div>
   </MultiContentLayout>
   </>
  );
};

export default HomePage;