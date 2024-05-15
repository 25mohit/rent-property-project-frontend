'use client'
import React, { useLayoutEffect, useState } from "react";
import UserForm from '../components/HOC/UserForm/UserForm'
import Link from "next/link";
import InputField from "../components/Utils/Form/InputField/InputField";
import OtpInput from 'react-otp-input';

const CompleteProfile = () => {
    const [otp, setOtp] = useState('');

    const [showVerifyOTP, setShowVerifyOTP] = useState(false);
    const handleGetOTPClick = () => {
        // Here you can add logic to send OTP
        // For simplicity, I'll just show the verifyOTP div
        setShowVerifyOTP(true);
      };

    return (
        <UserForm title="Welcome to login">
            <div className="topHead flex justify-between">
                {/* <button className="backBtn"><IoArrowBack /></button> */}
                <Link className="link" href="#">Skip {'>'}{'>'} </Link>
            </div>
            <div className="pageTitle">
                <h2 className="pageTitle">Complete Profile</h2>
                <p></p>
            </div>
            <InputField type="number" field="mobile" label="+91" placeholder="Phone Number" verifyClick={setShowVerifyOTP} />
           
           { showVerifyOTP && <div className='formGroup showOtp'>
             <div className="verificationForm">
               <label>OTP has been sent please verify</label>
               <div className='otpBox'>
                 <OtpInput
                   value={otp}
                   onChange={setOtp}
                   numInputs={4}
                   renderInput={(props: any) => <input {...props} />}
                 />
               </div>
             </div>
             <p className='error success text-center'></p>
           </div> }

            <button className='btn mainBtn fillBtn'>Verify</button>



        </UserForm>
    );
};

export default CompleteProfile;