"use client"
import React, { useState } from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import SelectDropdown from "../components/Utils/Form/SelectDropdown/SelectDropdown";

const SelectAddress = () => {
    const options= [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
    ]
    const [state, setState] = useState('')

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
                <div className="formGroup">
                    <label className="formLabel">Location</label>
                    <input type="text" className='form-control' placeholder='Search Location' />
                    <p className='error danger'></p>
                </div>
                <div className="titleBox formTile">
                    <div className="col"><h3 className="titleS">Address</h3></div>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Address</label>
                    <input type="text" className='form-control' placeholder='Enter Address' />
                    <p className='error danger'></p>
                </div>
                <div className="formGroup">
                    <label className="formLabel">State</label>
                    <SelectDropdown options={options} value={state}/>
                    <p className='error danger'></p>
                </div>
                <div className="formGroup">
                    <label className="formLabel">District</label>
                    <SelectDropdown options={options} />
                    <p className='error danger'></p>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Pin Code</label>
                    <input type="text" className='form-control' placeholder='Enter Pin Code' />
                    <p className='error danger'></p>
                </div>
                <div className="titleBox formTile">
                    <div className="col"><h3 className="titleS">Contact Details</h3></div>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Phone Number</label>
                    <div className="numberField">
                        <span className="countryCode">+91</span>
                        <input type="email" className='form-control' placeholder='Enter Your Phone Number' />
                    </div>
                    <p className='error danger'></p>
                </div>
                <button className='btn mainBtn fillBtn'>Submit</button>

            </div>
        </SingleContentLayout>
    );
};

export default SelectAddress;