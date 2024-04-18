import React from "react";
import MultiContentLayout from "../components/HOC/Layout/MultiContentLayout";
import Image from "next/image";
import { electronic, furniture, prImg1, prImg2, property } from "../../../public/images";


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

      <div className="row listingProduct">
          <div className="col-6">
            <div className="productCard">
              <figure className="productCardImg">
                <Image src={prImg1} alt="pr1" />
              </figure>
              <div className="productCardBoy">
                <h3 className="itemPrice">₹ 2,25,000</h3>
                <h4 className="distance">3.0 km</h4>
                <h5 className="prdTitle textLimit l1">Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h5>
                <p className="location textLimit l1">Airport Road, Ahmedabad</p>
              </div>
            </div>  
          </div>
          <div className="col-6">
            <div className="productCard">
              <figure className="productCardImg">
                <Image src={prImg2} alt="pr2" />
              </figure>
              <div className="productCardBoy">
                <h3 className="itemPrice">₹ 2,25,000</h3>
                <h4 className="distance">3.0 km</h4>
                <h5 className="prdTitle textLimit l1">Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h5>
                <p className="location textLimit l1">Airport Road, Ahmedabad</p>
              </div>
            </div>  
          </div>
          <div className="col-6">
            <div className="productCard">
              <figure className="productCardImg">
                <Image src={prImg1} alt="pr1" />
              </figure>
              <div className="productCardBoy">
                <h3 className="itemPrice">₹ 2,25,000</h3>
                <h4 className="distance">3.0 km</h4>
                <h5 className="prdTitle textLimit l1">Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h5>
                <p className="location textLimit l1">Airport Road, Ahmedabad</p>
              </div>
            </div>  
          </div>
          <div className="col-6">
            <div className="productCard">
              <figure className="productCardImg">
                <Image src={prImg2} alt="pr2" />
              </figure>
              <div className="productCardBoy">
                <h3 className="itemPrice">₹ 2,25,000</h3>
                <h4 className="distance">3.0 km</h4>
                <h5 className="prdTitle textLimit l1">Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h5>
                <p className="location textLimit l1">Airport Road, Ahmedabad</p>
              </div>
            </div>  
          </div>
          <div className="col-6">
            <div className="productCard">
              <figure className="productCardImg">
                <Image src={prImg1} alt="pr1" />
              </figure>
              <div className="productCardBoy">
                <h3 className="itemPrice">₹ 2,25,000</h3>
                <h4 className="distance">3.0 km</h4>
                <h5 className="prdTitle textLimit l1">Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h5>
                <p className="location textLimit l1">Airport Road, Ahmedabad</p>
              </div>
            </div>  
          </div>
          <div className="col-6">
            <div className="productCard">
              <figure className="productCardImg">
                <Image src={prImg2} alt="pr2" />
              </figure>
              <div className="productCardBoy">
                <h3 className="itemPrice">₹ 2,25,000</h3>
                <h4 className="distance">3.0 km</h4>
                <h5 className="prdTitle textLimit l1">Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h5>
                <p className="location textLimit l1">Airport Road, Ahmedabad</p>
              </div>
            </div>  
          </div>
          <div className="col-6">
            <div className="productCard">
              <figure className="productCardImg">
                <Image src={prImg1} alt="pr1" />
              </figure>
              <div className="productCardBoy">
                <h3 className="itemPrice">₹ 2,25,000</h3>
                <h4 className="distance">3.0 km</h4>
                <h5 className="prdTitle textLimit l1">Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h5>
                <p className="location textLimit l1">Airport Road, Ahmedabad</p>
              </div>
            </div>  
          </div>
          <div className="col-6">
            <div className="productCard">
              <figure className="productCardImg">
                <Image src={prImg2} alt="pr2" />
              </figure>
              <div className="productCardBoy">
                <h3 className="itemPrice">₹ 2,25,000</h3>
                <h4 className="distance">3.0 km</h4>
                <h5 className="prdTitle textLimit l1">Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h5>
                <p className="location textLimit l1">Airport Road, Ahmedabad</p>
              </div>
            </div>  
          </div>
          <div className="col-6">
            <div className="productCard">
              <figure className="productCardImg">
                <Image src={prImg1} alt="pr1" />
              </figure>
              <div className="productCardBoy">
                <h3 className="itemPrice">₹ 2,25,000</h3>
                <h4 className="distance">3.0 km</h4>
                <h5 className="prdTitle textLimit l1">Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h5>
                <p className="location textLimit l1">Airport Road, Ahmedabad</p>
              </div>
            </div>  
          </div>
          <div className="col-6">
            <div className="productCard">
              <figure className="productCardImg">
                <Image src={prImg2} alt="pr2" />
              </figure>
              <div className="productCardBoy">
                <h3 className="itemPrice">₹ 2,25,000</h3>
                <h4 className="distance">3.0 km</h4>
                <h5 className="prdTitle textLimit l1">Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h5>
                <p className="location textLimit l1">Airport Road, Ahmedabad</p>
              </div>
            </div>  
          </div>
      </div>
   </MultiContentLayout>
   </>
  );
};

export default HomePage;