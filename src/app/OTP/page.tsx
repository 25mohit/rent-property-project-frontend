'use client'
import React, { useState } from 'react';
import UserForm from '../components/HOC/UserForm/UserForm'
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import OtpInput from 'react-otp-input';

const OTPVerifivation = () => {
  const [otp, setOtp] = useState('');
  
  return (
    <UserForm title="Forgot Password">
        <div className="topHead flex justify-between">
          <Link href="/Login" className="backBtn"><IoArrowBack /></Link>
            {/* <Link className="link" href="#">Skip {'>'}{'>'} </Link> */}
        </div>
        <div className="pageTitle">
            <h2 className="mb-2">OTP Verification</h2>
            <p>OTP has been sent your registred email Id <br/>jkdesigner26@gmail.com</p>
        </div>
        <div className="formGroup">
          <div className='otpBox'>
            <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props: any) => <input {...props} />}
          />
          </div>
        
            <p className='error danger'></p>
        </div>
        <button className='btn mainBtn fillBtn' disabled>Verify</button>
        <p className="forgotPassword"><Link className="link" href="#">Resend OTP</Link></p>
    </UserForm>
  );
};

export default OTPVerifivation;