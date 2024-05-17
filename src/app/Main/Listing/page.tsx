"use client"
import React from "react";
import MyAds from "../../components/Utils/MyAds/MyAds";
import ListingLoader from "../../components/Utils/SkeletonLoader/ListingLoader";
import NoDataFound from "../../components/Utils/NoDataFound/NoDataFound";

const Listing = () => {
  return (
    <>
      {/* <ListingLoader /> */}
        <div className="titleBox fixTitle">
          <div className="col"><h3 className="titleS">My Ads</h3></div>
        </div>
      <div className="row listingProduct bottomSpace">

        {/* <NoDataFound title="No Listing, yet" type="listing" /> */}

        <div className="col-12"><MyAds /></div>
        <div className="col-12"><MyAds /></div>
        <div className="col-12"><MyAds /></div>
        <div className="col-12"><MyAds /></div>
        <div className="col-12"><MyAds /></div>
      </div>
    </>
  );
};

export default Listing;