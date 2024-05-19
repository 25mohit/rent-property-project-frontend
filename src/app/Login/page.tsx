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
import { useRouter } from "next/navigation";

const Login = () => {

  const [userForm, setUserForm] = useState({
    email:"",
    password:""
  })
  const [isBtnDisabled, setIsBtnDisabled] = useState(true)
  const [responseError, setResponseError] = useState('')

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>()
  const loginResponse = useSelector((state: RootState) => state.user?.data)
  
  useEffect(() => {
    localStorage.clear()
  },[])

  useEffect(() => {    
    if(userForm.email && userForm.password){
      setIsBtnDisabled(false)
    } else {
      setIsBtnDisabled(true)
    }
  },[userForm])

  useEffect(() => {
    if(loginResponse && Object.keys(loginResponse)?.length>0){
      if(!loginResponse?.status){
        if(loginResponse?.m === "nf"){
          setResponseError("User not Found")
        } else if(loginResponse?.m === "iv"){
          setResponseError("Your Password in Invalid")
        }
      } else if(loginResponse?.status){
        if(loginResponse?.m === "ss"){
          setResponseError("Logged In Successfully")
          localStorage.setItem('user-data', JSON.stringify(loginResponse?.d))
          router.push('/UnderDevelopment')
        }
      }
    }
  },[loginResponse])
  
  const onChangeHandler = (e: any) => {
    const {name, value} = e.target
    setUserForm({...userForm, [name]:value})
  }
  
  const onLoginHandler = (e: any) => {
    e.preventDefault()
    if(userForm?.email && userForm?.password){
      dispatch(SignInUser(userForm))
    }
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
        <button className='btn mainBtn fillBtn' disabled={isBtnDisabled} onClick={onLoginHandler}>Login</button>
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