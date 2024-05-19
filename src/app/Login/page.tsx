'use client'
import React, { useEffect, useState } from "react";
import UserForm from '../components/HOC/UserForm/UserForm'
import Image from "next/image";
import { google } from "../../../public/images";
import Link from "next/link";
import InputField from "../components/Utils/Form/InputField/InputField";
import { useDispatch, useSelector } from "react-redux";
import { SignInUser } from "@/redux/slices/UserSlice";
import { AppDispatch, RootState } from "@/redux/store";

const Login = () => {

  const [userForm, setUserForm] = useState({
    email:"",
    password:""
  })
  const [responseError, setResponseError] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const response = useSelector((state: RootState) => state.user?.data)

  useEffect(() => {
    if(response && Object.keys(response)?.length>0){
      if(!response?.status){
        if(response?.m === "nf"){
          setResponseError("User not Found")
        } else if(response?.m === "iv"){
          setResponseError("Your Password in Invalid")
        }
      }
    }
  },[response])
  
  const onChangeHandler = (e: any) => {
    console.log("adasdasd", e);
    const {name, value} = e.target
    setUserForm({...userForm, [name]:value})
  }
  
  console.log("response", response, responseError, userForm);

  const onLoginHandler = (e: any) => {
    e.preventDefault()
    const payload ={
      email: "mo",
      password:"ass"
    }
    dispatch(SignInUser(payload))
  }
  return (
    <UserForm title="Welcome to login">
        <div className="topHead flex justify-between">
          {/* <button className="backBtn"><IoArrowBack /></button> */}
            <Link className="link" href="#">Skip {'>'}{'>'} </Link>
        </div>
        <div className="pageTitle">
        <h2 className="pageTitle">Welcome to login</h2>
        </div>
        <InputField name="email" value={userForm?.email} onChange={onChangeHandler} type="text" placeholder="Email Address" required/>
        <InputField name="password" value={userForm?.password} onChange={onChangeHandler} type="password" placeholder="Password" />
       
        <p className="error danger">{responseError}</p>
        <button className='btn mainBtn fillBtn' onClick={onLoginHandler}>Login</button>
        <p className="forgotPassword"><Link className="link" href="/ForgotPassword">Forgot Password?</Link></p>

        <p className="orLogin"><span>or</span></p>
        <button className="gamilSignup">
            <Image src={google} alt="google" />
            <p>Continue with Google</p>
        </button>

        <p className="switchScreen">Don't have an account? <Link className="link" href="/Signup">Signup</Link></p>
    </UserForm>
  );
};

export default Login;