'use client'
import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import InputField from "../components/Utils/Form/InputField/InputField";
import { IoArrowBack } from "react-icons/io5";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import TextAreaField from "../components/Utils/Form/TextAreaField/TextAreaField";
import SelectDropdown from "../components/Utils/Form/SelectDropdown/SelectDropdown";

const Support = () => {
    const [category, setCategory] = useState('')
    const options = [
        { label: "Do you want to change phone number?", value: 'Do you want to change phone number?' },
        { label: "Do you want to change email address?", value: 'Do you want to change email address?' },
        { label: "Other", value: 'Other' },
    ]

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

            <SelectDropdown options={options} placeholder="Select your Query" setValue={setCategory} value={category} />
                <TextAreaField placeholder="Message" required />
                <button className='btn mainBtn fillBtn'>Submit</button>

            </div>

        </SingleContentLayout>
    );
};

export default Support;