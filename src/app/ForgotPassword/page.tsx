'use client'
import React, { useLayoutEffect, useState } from "react";
import UserForm from '../components/HOC/UserForm/UserForm'
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import OtpInput from 'react-otp-input';

const ForgotPassword = () => {
  const [otp, setOtp] = useState('');

  const [showVerifyOTP, setShowVerifyOTP] = useState(false);

  const handleGetOTPClick = () => {
    // Here you can add logic to send OTP
    // For simplicity, I'll just show the verifyOTP div
    setShowVerifyOTP(true);
  };
  return (
    <UserForm title="Forgot Password">
      <div className="topHead flex justify-between">
        <Link href="/Login" className="backBtn"><IoArrowBack /></Link>
        {/* <Link className="link" href="#">Skip {'>'}{'>'} </Link> */}
      </div>
      <div className="pageTitle">
        <h2 className="mb-2">Forgot Password</h2>
        <p>Please Enter Your Registred Email Id</p>
      </div>
      <div className="formGroup">
        <label className="formLabel">Email Address</label>
        <div className="otpVerification">
          <input type="email" className='form-control' placeholder='Enter Your Email Address' />
          <button type="button" className="getOtpBtn" onClick={handleGetOTPClick}>Get OTP</button>
        </div>
        <p className='error danger'></p>
      </div>
      {showVerifyOTP && (
        <div className="formGroup">
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
        </div>
      )}


      <p className="switchScreen">Don't have an account? <Link className="link" href="/Signup">Signup</Link></p>
    </UserForm>
  );
};

export default ForgotPassword;