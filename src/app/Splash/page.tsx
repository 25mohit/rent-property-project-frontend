'use client'
import React from "react";
import LogoImage from "../components/Utils/SvgIcons/LogoImage";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";

import { useEffect } from 'react';
import { useRouter } from "next/navigation";

const Splash = () => {
  const router = useRouter();

  // useEffect(() => {

  //    setTimeout(() => {
  //     router.push('/Home');
  //   }, 3000); 

  // }, []); 

  return (
      <div className="splashSection">
        <div className="splashBody">
          <LogoImage />
        </div>
      </div>
  );
};

export default Splash;