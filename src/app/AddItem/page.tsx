"use client"
import React, { useState } from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { prImg1 } from "../../../public/images";
import Image from "next/image";
import SelectDropdown from "../components/Utils/Form/SelectDropdown/SelectDropdown";
import { MdClose, MdOutlineCloudUpload } from "react-icons/md";
import InputField from "../components/Utils/Form/InputField/InputField";
import TextAreaField from "../components/Utils/Form/TextAreaField/TextAreaField";
import { useRouter } from "next/navigation";


const AddItem = () => {
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')
    const options = [
        { label: "House", value: 'house' },
        { label: "Laptop", value: 'laptop' },
        { label: "Computer", value: 'computer' },
        { label: "Mouse", value: 'mouse' },
    ]
    console.log("category", category);

    const router = useRouter()
    const handleBack = () => {
        router.back()
    }

    return (

        <SingleContentLayout>
            <div className="headerBar innerHeader">
                <div className="col"><button className="btn backBtn" onClick={handleBack}><IoArrowBack /></button>
                </div>
                <div className="col centerTitle">
                    <h5 className='dTitle textLimit l1'>Add Item</h5>
                </div>
                <div className="col"></div>
            </div>

            <div className="defaultSpace">
                <InputField type="text" placeholder="Item Name" />
                <SelectDropdown options={options} placeholder="Category" setValue={setCategory} value={category} />
                <SelectDropdown options={options} placeholder="Sub Category" setValue={setSubCategory} value={subCategory} />

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

                <TextAreaField placeholder="Description" />

                <Link href="/SelectAddress" className='btn mainBtn fillBtn'>Next</Link>

            </div>
        </SingleContentLayout>

    );
};

export default AddItem;