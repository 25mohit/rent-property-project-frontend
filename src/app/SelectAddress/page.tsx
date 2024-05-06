import React from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { prImg1, profileImg } from "../../../public/images";
import Image from "next/image";
import { FaCamera } from "react-icons/fa6";
import SelectDropdown from "../components/Utils/Form/SelectDropdown/page";
import { MdClose, MdOutlineCloudUpload } from "react-icons/md";


const SelectAddress = () => {
    return (
        <>
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
                        <SelectDropdown />
                        <p className='error danger'></p>
                    </div>
                    <div className="formGroup">
                        <label className="formLabel">District</label>
                        <SelectDropdown />
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
        </>
    );
};

export default SelectAddress;