"use client"
import React, { useState } from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import SelectDropdown from "../components/Utils/Form/SelectDropdown/SelectDropdown";
import InputField from "../components/Utils/Form/InputField/InputField";
import TextAreaField from "../components/Utils/Form/TextAreaField/TextAreaField";

const SelectAddress = () => {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
    ]

    
    const [stateSelect, setStateSelect] = useState('')
    const [districtSelect, setDistrictSelect] = useState('')
    

    return (
        <SingleContentLayout>
            <div className="headerBar innerHeader">
                <div className="col">
                    <Link href="/Chat" className="btn backBtn"><IoArrowBack /></Link>
                </div>
                <div className="col centerTitle">
                    <h5 className='dTitle textLimit l1'>Add Address</h5>
                </div>
                <div className="col"></div>
            </div>

            <div className="defaultSpace">

                <InputField type="text" placeholder="Search Location" />

                <div className="titleBox formTile">
                    <div className="col"><h3 className="titleS">Address</h3></div>
                </div>

                <SelectDropdown options={options} placeholder="State" setValue={setStateSelect} value={stateSelect} />
                <SelectDropdown options={options} placeholder="District" setValue={setDistrictSelect} value={districtSelect} />

                <InputField type="text" placeholder="Pincode" />

                <TextAreaField type="text" placeholder="Address" />
                
                
                <div className="titleBox formTile">
                    <div className="col"><h3 className="titleS">Contact Details</h3></div>
                </div>
                <InputField type="text" placeholder="Contact Person Name" />
                <InputField type="number" field="mobile" label="+91" placeholder="Contact Number" />
                <button className='btn mainBtn fillBtn'>Submit</button>

            </div>
        </SingleContentLayout>
    );
};

export default SelectAddress;