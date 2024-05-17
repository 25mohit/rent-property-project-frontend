"use client"
import React, { useState } from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import ReferImage from "../components/Utils/SvgIcons/ReferImage";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useRouter } from "next/navigation";


const Refer = () => {

    const router = useRouter()
    const handleBack = () => {
        router.back()
    }

    return (

        <SingleContentLayout>
            <div className="headerBar innerHeader">
                <div className="col">
                    <button className="btn backBtn" onClick={handleBack}><IoArrowBack /></button>
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
                    <div className="referBoxBody">
                        <h5>Refer & Earn <MdOutlineCurrencyRupee className="icon" /> 10</h5>
                        <h6>Invite your friends to join and get guaranteed Cashback*</h6>

                        <button className='btn mainBtn fillBtn' >Share</button>
                        <p>Note : Lorem Ipsum is simply dummy text of the printing and typesetting industry. <Link className="link" href="/Terms">Terms & Conditions</Link></p>

                    </div>
                </div>
            </div>
        </SingleContentLayout>
    );
};

export default Refer;