import React from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import InputField from "../components/Utils/Form/InputField/InputField";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
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
                    <h5 className='dTitle textLimit l1'>Change Password</h5>
                </div>
                <div className="col"></div>
            </div>

            <div className="defaultSpace">
                <InputField type="password" placeholder="New Password" />
                <InputField type="password" placeholder="Old Password" />
                <InputField type="password" placeholder="Confirm Password" />
                <button className='btn mainBtn fillBtn'>Submit</button>

            </div>
        </SingleContentLayout>
    );
};

export default ChangePassword;