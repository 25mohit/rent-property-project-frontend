'use client'
import React, { useLayoutEffect, useState } from "react";
import UserForm from '../components/HOC/UserForm/UserForm'
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import { google } from "../../../public/images";
import Link from "next/link";

const Signup = () => {

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
            <input type="text" className='form-control' placeholder='Full Name'/>
            <p className='error danger'></p>
        </div>
        <div className="formGroup">
            <input type="email" className='form-control' placeholder='Enter Email'/>
            <p className='error danger'></p>
        </div>
        <div className="formGroup">
            <div className='flex relative'>
                <input type="password" className='form-control' placeholder='Create Password'/>
                <button className="eyeAction">
                  <AiFillEye/>
                  {/* <AiFillEyeInvisible /> */}
                </button>
            </div>
            <p className='error danger'></p>
        </div>
        <button className='btn mainBtn fillBtn'>Signup</button>

        <p className="orLogin"><span>or</span></p>

        <button className="gamilSignup">
            <Image src={google} alt="google" />
            <p>Continue with Google</p>
        </button>
        <p className="switchScreen">Already have an account? <Link className="link" href="/Login">Signup</Link></p>
    </UserForm>
  );
};

export default Signup;