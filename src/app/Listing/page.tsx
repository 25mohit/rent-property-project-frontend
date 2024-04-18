import React from "react";
import MultiContentLayout from "../components/HOC/Layout/MultiContentLayout";
import Image from "next/image";
import MyAds from "../components/Utils/MyAds/MyAds";


const Listing = () => {
  return (
    <>
    <MultiContentLayout>
      <div className="row listingProduct bottomSpace">
          <div className="titleBox">
            <div className="col"><h3 className="titleS">My Ads</h3></div>
          </div>
          <div className="col-12"><MyAds /></div>
      </div>
   </MultiContentLayout>
   </>
  );
};

export default Listing;