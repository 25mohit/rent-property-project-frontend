"use client"
import React, { useState } from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { MdClose, MdOutlineCloudUpload } from "react-icons/md";
import InputField from "../components/Utils/Form/InputField/InputField";
import { prImg1 } from "../../../public/images";
import Image from "next/image";


const Verification = () => {
    const [showUploadItem, setShowUploadItem] = useState(false);

    const toggleUploadItem = () => {
        setShowUploadItem(!showUploadItem);
    };

    return (

        <SingleContentLayout>
            <div className="headerBar innerHeader">
                <div className="col">
                    <Link href="/EditProfile" className="btn backBtn"><IoArrowBack /></Link>
                </div>
                <div className="col centerTitle">
                    <h5 className='dTitle textLimit l1'>Verification</h5>
                </div>
                <div className="col"></div>
            </div>

            <div className="defaultSpace">
                <InputField type="text" placeholder="Aadhaar Number" />
                <InputField type="number" field="mobile" label="+91" placeholder="Aadhar in  Registred Phone Number" />

                <div className="formGroup">
                    <label className="formLabelNew">Upload Aadhar Photo</label>
                    <div className="uploadedMultiImg aadharUpload">
                        {!showUploadItem && (
                            <div className="uploadImgItemPlus" onClick={toggleUploadItem}>
                                <div className="uploadIn">
                                    <MdOutlineCloudUpload className="icon" />
                                    <h6>Front Photo</h6>
                                </div>
                                {/* <input type="file" /> */}
                            </div>
                        )}
                        {showUploadItem && (<div className="uploadImgItem">
                            <Image src={prImg1} alt="upload Img" className="imgUpload" />
                            <MdClose className="closeIcon" onClick={toggleUploadItem} />
                        </div>)}
                    </div>

                    <div className="uploadedMultiImg aadharUpload">
                        {!showUploadItem && (
                            <div className="uploadImgItemPlus" onClick={toggleUploadItem}>
                                <div className="uploadIn">
                                    <MdOutlineCloudUpload className="icon" />
                                    <h6>Back Photo</h6>
                                </div>
                                {/* <input type="file" /> */}
                            </div>
                        )}
                        {showUploadItem && (<div className="uploadImgItem">
                            <Image src={prImg1} alt="upload Img" className="imgUpload" />
                            <MdClose className="closeIcon" onClick={toggleUploadItem} />
                        </div>)}
                    </div>

                    <p className='error danger'></p>
                </div>

                <Link href="/SelectAddress" className='btn mainBtn fillBtn'>Next</Link>

            </div>
        </SingleContentLayout>

    );
};

export default Verification;