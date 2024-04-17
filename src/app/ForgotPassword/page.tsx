'use client'
import React from "react";
import UserForm from '../components/HOC/UserForm/UserForm'
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const ForgotPassword = () => {
 
  return (
    <UserForm title="Forgot Password">
        <div className="topHead flex justify-between">
          <Link href="/Login" className="backBtn"><IoArrowBack /></Link>
            {/* <Link className="link" href="#">Skip {'>'}{'>'} </Link> */}
        </div>
        <div className="pageTitle">
            <h2 className="mb-2">Forgot Password</h2>
            <p>Please Enter Your Registred Email Id</p>
        </div>
        <div className="formGroup">
            <label className="formLabel">Email Address</label>
            <input type="email" className='form-control' placeholder='Enter Your Email Address'/>
            <p className='error danger'></p>
        </div>
        <Link href="/OTP" className='btn mainBtn fillBtn'>Submit</Link>


        <p className="switchScreen">Don't have an account? <Link className="link" href="/Signup">Signup</Link></p>
    </UserForm>
  );
};

export default ForgotPassword;