'use client'
import React, {  useState } from "react";
import UserForm from '../components/HOC/UserForm/UserForm'
import { AiFillEye } from "react-icons/ai";
import Image from "next/image";
import { google } from "../../../public/images";
import Link from "next/link";
import OtpInput from 'react-otp-input';

const Signup = () => {
  const [otp, setOtp] = useState('');

  const [showVerifyOTP, setShowVerifyOTP] = useState(false);

  const handleGetOTPClick = () => {
    setShowVerifyOTP(true);
  };

  return (
    <UserForm title="Create an account">
      <div className="topHead flex justify-between">
        {/* <button className="backBtn"><IoArrowBack /></button> */}
        <Link className="link" href="#">Skip {'>'}{'>'} </Link>
      </div>
      <div className="pageTitle">
        <h2>Create an account</h2>
      </div>
      <div className="formGroup">
        <label className="formLabel">Full Name</label>
        <input type="text" className='form-control' placeholder='Enter Your Full Name' />
        <p className='error danger'></p>
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
      <div className="formGroup">
        <label className="formLabel">Phone Number</label>
        <div className="numberField">
          <span className="countryCode">+91</span>
          <input type="email" className='form-control' placeholder='Enter Your Phone Number' />
        </div>
        <p className='error danger'></p>
      </div>
      <div className="formGroup">
        <label className="formLabel">Password</label>
        <div className='flex relative'>
          <input type="password" className='form-control' placeholder='Create Password' />
          <button type="button" className="eyeAction">
            <AiFillEye />
            {/* <AiFillEyeInvisible /> */}
          </button>
        </div>
        <p className='error danger'></p>
      </div>
      <div className="formGroup">
        <label className="formLabel">Refer Code</label>
        <input type="text" className='form-control' placeholder='Refer Code' />
        <p className='error danger'></p>
      </div>
      <div className="formGroup">
        <label className="checkbox agreeTerms">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Are you agree with our <Link className="link" href="/Terms">Terms & Conditions</Link> and <Link className="link" href="/Privacy">Privacy Policy</Link>.
        </label>
        <p className='error danger'></p>
      </div>
      <button className='btn mainBtn fillBtn'>Signup</button>

      <p className="orLogin"><span>or</span></p>

      <button className="gamilSignup">
        <Image src={google} alt="google" />
        <p>Continue with Google</p>
      </button>
      <p className="switchScreen">Already have an account? <Link className="link" href="/Login">Login</Link></p>
    </UserForm>
  );
};

export default Signup;