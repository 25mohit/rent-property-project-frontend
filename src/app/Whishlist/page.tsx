import React from "react";
import MultiContentLayout from "../components/HOC/Layout/MultiContentLayout";
import Image from "next/image";
import { electronic, furniture, property } from "../../../public/images";
import PropertyCard from "../components/Utils/PropertyCard/PropertyCard";


const Wishlist = () => {
  return (
    <>
    <MultiContentLayout>
      <div className="row listingProduct bottomSpace">
          <div className="titleBox">
            <div className="col"><h3 className="titleS">Whishlist</h3></div>
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

export default Wishlist;