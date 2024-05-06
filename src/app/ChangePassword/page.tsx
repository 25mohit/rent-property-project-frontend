import React from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { profileImg } from "../../../public/images";
import Image from "next/image";
import { FaCamera } from "react-icons/fa6";
import { AiFillEye } from "react-icons/ai";

const ChangePassword = () => {
    return (
        <SingleContentLayout>
            <div className="headerBar innerHeader">
                <div className="col">
                    <Link href="/Chat" className="btn backBtn"><IoArrowBack /></Link>
                </div>
                <div className="col centerTitle">
                    <h5 className='dTitle textLimit l1'>Change Password</h5>
                </div>
                <div className="col"></div>
            </div>

            <div className="defaultSpace">
                <div className="formGroup">
                    <label className="formLabel">Old Password</label>
                    <div className='flex relative'>
                        <input type="password" className='form-control' placeholder='Enter Old Password' />
                        <button type="button" className="eyeAction">
                            <AiFillEye />
                            {/* <AiFillEyeInvisible /> */}
                        </button>
                    </div>
                    <p className='error danger'></p>
                </div>
                <div className="formGroup">
                    <label className="formLabel">New Password</label>
                    <div className='flex relative'>
                        <input type="password" className='form-control' placeholder='Enter New Password' />
                        <button type="button" className="eyeAction">
                            <AiFillEye />
                            {/* <AiFillEyeInvisible /> */}
                        </button>
                    </div>
                    <p className='error danger'></p>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Confirm Password</label>
                    <div className='flex relative'>
                        <input type="password" className='form-control' placeholder='Enter Confirm Password' />
                        <button type="button" className="eyeAction">
                            <AiFillEye />
                            {/* <AiFillEyeInvisible /> */}
                        </button>
                    </div>
                    <p className='error danger'></p>
                </div>
                <button className='btn mainBtn fillBtn'>Submit</button>

            </div>
        </SingleContentLayout>
    );
};

export default ChangePassword;