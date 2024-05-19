<<<<<<< HEAD
=======
"use client"
import React from "react";
>>>>>>> 190e45794f1a1fd41419319896fd87a225e0eafc
import PropertyCard from "@/app/components/Utils/PropertyCard/PropertyCard";

const Wishlist = () => {
  return (
    <>
    <div className="titleBox fixTitle">
      <div className="col"><h3 className="titleS">Wishlist</h3></div>
    </div>
      <div className="row listingProduct bottomSpace">
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
      </>
  );
};

export default Wishlist;