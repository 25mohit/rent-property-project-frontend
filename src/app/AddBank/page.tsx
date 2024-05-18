"use client"
import React from "react";
import { useRouter } from "next/navigation";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { profileImg } from "../../../public/images";
import Image from "next/image";
import { FaCamera } from "react-icons/fa6";
import InputField from "../components/Utils/Form/InputField/InputField";
import DisabledField from "../components/Utils/Form/DisabledField/DisabledField";
import CalculateFontSize from "../components/HOC/Layout/CalculateFontSize";

const AddBank = () => {
    const router = useRouter()
    const handleBack = () => {
        router.back()
    }
    return (
        <CalculateFontSize>
            <SingleContentLayout>
                <div className="headerBar innerHeader">
                    <div className="col"><button className="btn backBtn" onClick={handleBack}><IoArrowBack /></button>
                    </div>
                    <div className="col centerTitle">
                        <h5 className='dTitle textLimit l1'>Add Bank</h5>
                    </div>
                    <div className="col"></div>
                </div>

                <div className="defaultSpace">

                    <InputField type="text" placeholder="Bank Account Holder's Name" required />
                    <InputField type="text" placeholder="Bank Account Number" required />
                    <InputField type="text" placeholder="Ifsc Code" required />
                    <InputField type="text" placeholder="Bank Name" required />


                    <button className='btn mainBtn fillBtn'>Submit</button>

                </div>
            </SingleContentLayout>
        </CalculateFontSize>
    );
};

export default AddBank;