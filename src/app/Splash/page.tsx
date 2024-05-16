'use client'
import React from "react";
import LogoImage from "../components/Utils/SvgIcons/LogoImage";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";

import { useEffect } from 'react';
import { useRouter } from "next/navigation";

const Splash = () => {
  const router = useRouter();

  useEffect(() => {

     setTimeout(() => {
      router.push('/Login');
    }, 2000); 

  }, []); 

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