"use client"
import React, { useState } from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";


const Refer = () => {
    

    return (

        <SingleContentLayout>
            <div className="headerBar innerHeader">
                <div className="col">
                    <Link href="/SelectAddress" className="btn backBtn"><IoArrowBack /></Link>
                </div>
                <div className="col centerTitle">
                    <h5 className='dTitle textLimit l1'>Refer & Rewards</h5>
                </div>
                <div className="col"></div>
            </div>

            <div className="defaultSpace">
                
            </div>
        </SingleContentLayout>

    );
};

export default Refer;