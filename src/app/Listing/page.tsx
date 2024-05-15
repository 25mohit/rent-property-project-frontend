import React from "react";
import MultiContentLayout from "../components/HOC/Layout/MultiContentLayout";
import Image from "next/image";
import MyAds from "../components/Utils/MyAds/MyAds";
import ListingLoader from "../components/Utils/SkeletonLoader/ListingLoader";
import NoDataFound from "../components/Utils/NoDataFound/NoDataFound";

const Listing = () => {
  return (

    <MultiContentLayout>
      <ListingLoader />
      <div className="row listingProduct bottomSpace">
        <div className="titleBox">
          <div className="col"><h3 className="titleS">My Ads</h3></div>
        </div>

        {/* <NoDataFound title="No Listing, yet" type="listing" /> */}

        <div className="col-12"><MyAds /></div>
        <div className="col-12"><MyAds /></div>
        <div className="col-12"><MyAds /></div>
        <div className="col-12"><MyAds /></div>
        <div className="col-12"><MyAds /></div>
      </div>
    </MultiContentLayout>

  );
};

export default Listing;