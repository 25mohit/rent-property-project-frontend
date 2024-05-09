import React from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { profileImg } from "../../../public/images";
import Image from "next/image";
import { FaCamera } from "react-icons/fa6";
import InputField from "../components/Utils/Form/InputField/InputField";
import { TbDiscountCheckFilled } from "react-icons/tb";

const EditProfile = () => {
    return (
        <SingleContentLayout>
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
                        <button className="uploadBtn"><FaCamera /><input type="file" /></button>
                    </div>
                    <div className="verifiedTagBox">
                        <span className="verifiedTag"><TbDiscountCheckFilled className='blueTik' /> Verified</span>
                    </div>
                    <p className='error danger'></p>
                </div>
                
                <InputField type="text" placeholder="Full Name" />
                <InputField type="text" placeholder="Email Id" />
                <InputField type="number" field="mobile" label="+91" placeholder="Phone Number" />

                <button className='btn mainBtn fillBtn'>Submit</button>

                <div className="linkverification">
                    <Link className="link" href="/Verification">Click to Verify you account</Link>
                </div>
            </div>
        </SingleContentLayout>
    );
};

export default EditProfile;