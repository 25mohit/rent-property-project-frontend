import React from "react";
import MultiContentLayout from "../components/HOC/Layout/MultiContentLayout";
import Image from "next/image";
import { electronic, furniture, property } from "../../../public/images";
import PropertyCard from "../components/Utils/PropertyCard/PropertyCard";
import NoDataFound from "../components/Utils/NoDataFound/NoDataFound";

const Wishlist = () => {
  return (
    
    <MultiContentLayout>
      <div className="row listingProduct bottomSpace">
          <div className="titleBox">
            <div className="col"><h3 className="titleS">Whishlist</h3></div>
          </div>
          {/* <NoDataFound title="No Wishlist, yet" type="wishlist" /> */}
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
   
  );
};

export default Wishlist;