'use client'
import React, { useLayoutEffect, useState } from "react";
import UserForm from '../components/HOC/UserForm/UserForm'
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import OtpInput from 'react-otp-input';
import InputField from "../components/Utils/Form/InputField/InputField";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [otp, setOtp] = useState('');
  const [userForm, setUserForm] = useState({
    email:'',
    password:"",
    confirmPassword:""
  })

  const [showVerifyOTP, setShowVerifyOTP] = useState(false);

  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  const onChangeHandler = (e: any) => {
    const {name, value} = e.target
    setUserForm({...userForm, [name]: value})
  }

  return (
    <UserForm title="Forgot Password">
      <div className="topHead flex justify-between">
        <Link href="/Login" className="backBtn" ><IoArrowBack /></Link>
        {/* <Link className="link" href="#">Skip {'>'}{'>'} </Link> */}
      </div>
      <div className="pageTitle">
        <h2 className="mb-2">Forgot Password</h2>
        <p>Please Enter Your Registred Email Id</p>
      </div>
      <InputField value={userForm?.email} name="email" onChange={onChangeHandler} type="email" placeholder="Email Address" verifyClick={setShowVerifyOTP} />

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

      <div>
        <InputField value={userForm?.password} name="password" onChange={onChangeHandler} type="password" placeholder="New Password" />
        <InputField value={userForm?.confirmPassword} name="confirmPassword" onChange={onChangeHandler} type="password" placeholder="Confirm Password" />
        <button className='btn mainBtn fillBtn' >Submit</button>
      </div>

      <p className="switchScreen">Don't have an account? <Link className="link" href="/Signup">Signup</Link></p>
    </UserForm>
  );
};

export default ForgotPassword;