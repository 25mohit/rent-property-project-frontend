"use client"
import React, { useState } from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import ReferImage from "../components/Utils/SvgIcons/ReferImage";
import CalculateFontSize from "../components/HOC/Layout/CalculateFontSize";


const Refer = () => {


    return (

        <CalculateFontSize>
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
                <Link href="/" className="referCount">
                    <div className="left">
                        <p>Total Refers</p>
                        <h3 className="count">20</h3>
                    </div>
                    <FaArrowRight className="arrow" />
                </Link>

                <div className="referBox">
                   <ReferImage />
                </div>
            </div>
        </SingleContentLayout>
        </CalculateFontSize>
    );
};

export default Refer;