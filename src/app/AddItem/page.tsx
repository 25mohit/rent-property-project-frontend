"use client"
import React, { useState } from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { prImg1, profileImg } from "../../../public/images";
import Image from "next/image";
import { FaCamera } from "react-icons/fa6";
import SelectDropdown from "../components/Utils/Form/SelectDropdown/SelectDropdown";
import { MdClose, MdOutlineCloudUpload } from "react-icons/md";
import InputField from "../components/Utils/Form/InputField/InputField";


const AddItem = () => {
    const [category, setCategory] = useState('')
    return (
        <>
            <SingleContentLayout>
                <div className="headerBar innerHeader">
                    <div className="col">
                        <Link href="/Chat" className="btn backBtn"><IoArrowBack /></Link>
                    </div>
                    <div className="col centerTitle">
                        <h5 className='dTitle textLimit l1'>Add Item</h5>
                    </div>
                    <div className="col"></div>
                </div>

                <div className="defaultSpace">

                    <InputField type="text" placeholder="Item Name" />
                    <SelectDropdown placeholder="Category" setValue={setCategory} value={category}/>
                    
                    <div className="formGroup">
                        <label className="formLabelNew">Upload Item Image</label>
                        <div className="uploadedMultiImg">
                            <div className="uploadImgItemPlus">
                                <div className="uploadIn">
                                    <MdOutlineCloudUpload className="icon" />
                                    <h6>Upload</h6>
                                </div>
                                <input type="file" />
                            </div>
                            <div className="uploadImgItem">
                                <Image src={prImg1} alt="upload Img" className="imgUpload" />
                                <MdClose className="closeIcon" />
                                <span className="mainSelect">Main Image</span>
                            </div>
                            <div className="uploadImgItem">
                                <Image src={prImg1} alt="upload Img" className="imgUpload" />
                                <MdClose className="closeIcon" />
                            </div>
                            <div className="uploadImgItem">
                                <Image src={prImg1} alt="upload Img" className="imgUpload" />
                                <MdClose className="closeIcon" />
                            </div>
                        </div>
                        <p className='error danger'></p>
                    </div>
                    
                    {/* <div className="formGroup">
                        <label className="formLabel">Description</label>
                        <textarea className='form-control' placeholder='Description'></textarea>
                        <p className='error danger'></p>
                    </div> */}
                    <Link href="/SelectAddress" className='btn mainBtn fillBtn'>Next</Link>

                </div>
            </SingleContentLayout>
        </>
    );
};

export default AddItem;