"use client"
import React, { useState } from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SelectLocation = () => {
    
    const router = useRouter()
    const handleBack = () => {
        router.back()
    }
    return (

        <SingleContentLayout>
            <div className="headerBar innerHeader">
                <div className="col"><button className="btn backBtn" onClick={handleBack}><IoArrowBack /></button>
                </div>
                <div className="col centerTitle">
                    <h5 className='dTitle textLimit l1'>Select Location</h5>
                </div>
                <div className="col"></div>
            </div>

            <div className="defaultSpace">
                
            </div>
        </SingleContentLayout>

    );
};

export default SelectLocation;