import React from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { profileImg } from "../../../public/images";
import Image from "next/image";
import { FaCamera } from "react-icons/fa6";


const EditProfile = () => {
    return (
        <>
            <SingleContentLayout children={undefined}>
                <div className="headerBar innerHeader">
                    <div className="col">
                        <Link href="/Chat" className="btn backBtn"><IoArrowBack /></Link>
                    </div>
                    <div className="col centerTitle">
                        <h5 className='dTitle textLimit l1'>Edit Profile</h5>
                    </div>
                    <div className="col"></div>
                </div>

                <div className="defaultSpace">
                    <div className="formGroup">
                        <div className="uploadImg">
                           <Image src={profileImg} alt="property" className="userProfile" />
                           <button className="uploadBtn"><FaCamera /><input type="file"/></button>
                        </div>
                        <p className='error danger'></p>
                    </div>
                    <div className="formGroup">
                        <label className="formLabel">Full Name</label>
                        <input type="text" className='form-control' placeholder='Enter Your Full Name' />
                        <p className='error danger'></p>
                    </div>
                    <div className="formGroup">
                        <label className="formLabel">Email Address</label>
                        <input type="email" className='form-control' placeholder='Enter Your Email Address' value="jkdesigner62@gmail.com" disabled />
                        <p className='error danger'></p>
                    </div>
                    <div className="formGroup">
                        <label className="formLabel">Phone Number</label>
                        <input type="email" className='form-control' placeholder='Enter Your Phone Number'  />
                        <p className='error danger'></p>
                    </div>
                    <button className='btn mainBtn fillBtn'>Submit</button>

                    <div className="linkverification">
                        <Link className="link" href="#">Click to Verify you account</Link>
                    </div>
                </div>
            </SingleContentLayout>
        </>
    );
};

export default EditProfile;