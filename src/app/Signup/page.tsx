'use client'
import React, {  useState } from "react";
import UserForm from '../components/HOC/UserForm/UserForm'
import { AiFillEye } from "react-icons/ai";
import Image from "next/image";
import { google } from "../../../public/images";
import Link from "next/link";
import OtpInput from 'react-otp-input';
import InputField from "../components/Utils/Form/InputField/InputField";

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
      
      <InputField type="text" placeholder="Full Name" />
      <InputField type="email" placeholder="Email Address" />
      <InputField type="number" field="mobile" label="+91" placeholder="Phone Number" />
      <InputField type="password" placeholder="Password" />
      <InputField type="text" placeholder="Refer Code" />
   
{/*      
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
      </div> */}
      
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