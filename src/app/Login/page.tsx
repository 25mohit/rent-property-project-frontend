'use client'
import React, { useLayoutEffect, useState } from "react";
import UserForm from '../components/HOC/UserForm/UserForm'
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import { google } from "../../../public/images";
import Link from "next/link";

const Login = () => {

  return (
    <UserForm title="Welcome to login">
        <div className="topHead flex justify-between">
          {/* <button className="backBtn"><IoArrowBack /></button> */}
            <Link className="link" href="#">Skip {'>'}{'>'} </Link>
        </div>
        <div className="pageTitle">
        <h2>Welcome to login</h2>
        </div>
        <div className="formGroup">
            <label className="formLabel">Email Address</label>
            <input type="email" className='form-control' placeholder='Enter Your Email Address'/>
            <p className='error danger'></p>
        </div>
        <div className="formGroup">
            <label className="formLabel">Password</label>
            <div className='flex relative'>
                <input type="password" className='form-control' placeholder='Enter Your Password'/>
                <button className="eyeAction">
                  <AiFillEye/>
                  {/* <AiFillEyeInvisible /> */}
                </button>
            </div>
            <p className='error danger'></p>
        </div>
        <button className='btn mainBtn fillBtn' >Login</button>
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