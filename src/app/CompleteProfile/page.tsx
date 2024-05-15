'use client'
import React, { useLayoutEffect, useState } from "react";
import UserForm from '../components/HOC/UserForm/UserForm'
import Link from "next/link";
import InputField from "../components/Utils/Form/InputField/InputField";
import OtpInput from 'react-otp-input';
import { IoArrowBack } from "react-icons/io5";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";

const CompleteProfile = () => {
  const [otp, setOtp] = useState('');

  const [showVerifyOTP, setShowVerifyOTP] = useState(false);
  const handleGetOTPClick = () => {
    // Here you can add logic to send OTP
    // For simplicity, I'll just show the verifyOTP div
    setShowVerifyOTP(true);
  };

  return (
    <SingleContentLayout>
      <div className="headerBar innerHeader">
        <div className="col">
          <Link href="/Chat" className="btn backBtn"><IoArrowBack /></Link>
        </div>
        <div className="col centerTitle">
          <h5 className='dTitle textLimit l1'>Complete Profile</h5>
        </div>
        <div className="col"></div>
      </div>

      <div className="defaultSpace">
      <InputField type="number" field="mobile" label="+91" placeholder="Phone Number" mobileVerify="mobileVerify" verifyClick={setShowVerifyOTP} />

      {showVerifyOTP && <div className='formGroup showOtp'>
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
      </div>}

      <button className='btn mainBtn fillBtn'>Verify</button>

      </div>

    </SingleContentLayout>
  );
};

export default CompleteProfile;