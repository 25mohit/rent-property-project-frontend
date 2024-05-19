'use client'
import React, { useEffect, useState } from "react";
import UserForm from '../components/HOC/UserForm/UserForm'
import { AiFillEye } from "react-icons/ai";
import Image from "next/image";
import { google } from "../../../public/images";
import Link from "next/link";
import OtpInput from 'react-otp-input';
import InputField from "../components/Utils/Form/InputField/InputField";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { CheckEmail } from "@/redux/slices/UserSlice";

const Signup = () => {
  const [otp, setOtp] = useState('');
  const [userForm, setUserForm] = useState({
    name:'',
    email:'',
  })
  const [handleVerifyBtn, setHandleVerifyBtn] = useState(false);
  const [showOtp, setShowOtp] = useState(false)
  const [responseError, setResponseError] = useState("")

  const dispatch = useDispatch<AppDispatch>()
  const response = useSelector((state: RootState) => state.user?.data)

  console.log("response", response);
  useEffect(() => {
    if(response && Object.keys(response)?.length>0){
      if(response?.status){
        if(response?.m === "ss"){
          setShowOtp(true)
          setResponseError('')
        }
      } else if(!response?.status){
        if(response?.m === "ex"){
          setResponseError("Email already Registered with us")
        } else if(response?.m === "cl"){
          setResponseError("Previous OTP cleared, retry now !")
        } else if(response?.m === "er"){
          setResponseError("Service is not working currently, try later")
        }
      }
    }
  },[response])
  
  useEffect(() => {
    if(handleVerifyBtn){
      dispatch(CheckEmail(userForm))
    }
  },[handleVerifyBtn])
  const onChangeHandler = (e: any) => {
    const {name, value} = e.target
    setUserForm({...userForm, [name]: value})
  }

  return (
    <UserForm title="Create an account">
      <div className="topHead flex justify-between">
        {/* <button className="backBtn"><IoArrowBack /></button> */}
        <Link className="link" href="#">Skip {'>'}{'>'} </Link>
      </div>
      <div className="pageTitle">
        <h2>Create an account</h2>
      </div>

      <InputField value={userForm.name} onChange={onChangeHandler} name="name" type="text" placeholder="Full Name" />
      <InputField value={userForm.email} onChange={onChangeHandler} name="email" type="email" placeholder="Email Address" verifyClick={setHandleVerifyBtn} />

      {showOtp && <div className='formGroup showOtp'>
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
      <div style={{ display: 'none' }}>
        <InputField type="text" placeholder="Refer Code" />
        <InputField type="password" placeholder="Password" />
      </div>


      <div className="formGroup">
        <label className="checkbox agreeTerms">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Are you agree with our <Link className="link" href="/Terms">Terms & Conditions</Link> and <Link className="link" href="/Privacy">Privacy Policy</Link>.
        </label>
        <p className='error danger'></p>
      </div>
      <p className="error danger">{responseError}</p>
      <button className='btn mainBtn fillBtn' disabled>Signup</button>

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