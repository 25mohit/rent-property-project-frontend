'use client'
import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import InputField from "../components/Utils/Form/InputField/InputField";
import { IoArrowBack } from "react-icons/io5";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";

const Support = () => {


    return (
        <SingleContentLayout>
            <div className="headerBar innerHeader">
                <div className="col">
                    <Link href="/Chat" className="btn backBtn"><IoArrowBack /></Link>
                </div>
                <div className="col centerTitle">
                    <h5 className='dTitle textLimit l1'>Help & Support</h5>
                </div>
                <div className="col"></div>
            </div>

            <div className="defaultSpace">


                <button className='btn mainBtn fillBtn'>Verify</button>

            </div>

        </SingleContentLayout>
    );
};

export default Support;