'use client'
import React from "react";
import Image from "next/image";
import LogoImage from "../components/Utils/SvgIcons/LogoImage";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";

const Splash = () => {
  return (
    <SingleContentLayout>
      <div className="splashSection">
        <div className="splashBody">
          <LogoImage />
        </div>
      </div>
    </SingleContentLayout>
  );
};

export default Splash;