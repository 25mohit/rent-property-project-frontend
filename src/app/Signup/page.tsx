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
import { CheckEmail, RegisterUser, VerifyOTP } from "@/redux/slices/UserSlice";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [otp, setOtp] = useState('');
  const [userForm, setUserForm] = useState({
    name:'',
    email:'',
    password:"",
    referCode:""
  })
  const [handleVerifyBtn, setHandleVerifyBtn] = useState(false);
  const [showOtp, setShowOtp] = useState(false)
  const [responseError, setResponseError] = useState("")
  const [showRemeningFields, setShowRemeningFields] = useState(false)
  const [isBtnDisabled, setIsBtnDisabled] = useState(true)

  const dispatch = useDispatch<AppDispatch>()
  const response = useSelector((state: RootState) => state.user?.data)
  const otpResponse = useSelector((state: RootState) => state.user?.otpData)
  const registerResponse = useSelector((state: RootState) => state.user?.registerData)

  const router = useRouter()
  console.log("registerResponse", registerResponse);
  
  useEffect(() => {
    if(showOtp && otp?.length === 4){
      const payload = {
        email: userForm?.email,
        otp
      }
      dispatch(VerifyOTP(payload))
    }
  },[otp])

  console.log("response", response, otpResponse);
  useEffect(() => {
    if(response && Object.keys(response)?.length>0){
      if(response?.status){
        if(response?.m === "ss"){
          setShowOtp(true)
          setResponseError('')
        }
      } else if(!response?.status){
        setHandleVerifyBtn(false)
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

  useEffect(() => {
    if(otpResponse && Object.keys(otpResponse)?.length >0){
      if(!otpResponse?.status){
        if(otpResponse?.m === "in"){
          setResponseError("Invalid OTP, try again")
        } else if(otpResponse?.m === "ex"){
          setShowOtp(false)
          setOtp('')
          setResponseError("Otp is Expired, request another OTP")
        }
      } else if(otpResponse?.status){
        if(otpResponse?.m === "ss"){
          setResponseError("OTP Verified")
          setShowRemeningFields(true)
        }
      }
    }
  },[otpResponse])

  useEffect(() => {
    if(userForm.name && userForm.email && userForm.password){
      setIsBtnDisabled(false)
    } else {
      setIsBtnDisabled(true)
    }
  },[userForm])

  useEffect(() => {
    if(registerResponse && Object.keys(registerResponse)?.length>0){
      if(registerResponse?.status){
        setResponseError("You are Registered Successfully")
        router.push("/Login")
      }
    }
  },[registerResponse])
  const onChangeHandler = (e: any) => {
    const {name, value} = e.target
    setUserForm({...userForm, [name]: value})
  }

  const onClickHandler = (e: any) => {
    e.preventDefault()

    if(userForm.name && userForm.email && userForm.password){
      dispatch(RegisterUser(userForm))
    }
  }
  console.log("otp", otp);
  
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
      { showRemeningFields && <div>
        <InputField value={userForm.referCode?.toUpperCase()} onChange={onChangeHandler} name="referCode" type="text" placeholder="Refer Code" />
        <InputField value={userForm.password} onChange={onChangeHandler} name="password" type="password" placeholder="Password" />
      </div> }
      <div className="formGroup">
        <label className="checkbox agreeTerms">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Are you agree with our <Link className="link" href="/Terms">Terms & Conditions</Link> and <Link className="link" href="/Privacy">Privacy Policy</Link>.
        </label>
        <p className='error danger'></p>
      </div>
      <p className="error danger">{responseError}</p>
      <button className='btn mainBtn fillBtn' onClick={onClickHandler} disabled={isBtnDisabled}>Signup</button>
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