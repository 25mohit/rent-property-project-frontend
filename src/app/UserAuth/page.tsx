import React, { useEffect, useState } from "react";
import UserForm from '../components/HOC/UserForm/UserForm'
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import { google } from "../../../public/images";
import Link from "next/link";

const UserAuth = () => {
  return (
    <UserForm title="Welcome to login">
        <div className="formGroup">
            <input type="text" className='form-control' placeholder='Enter Email'/>
            <p className='error danger'></p>
        </div>
        <div className="formGroup">
            <div className='flex relative'>
                <input type="password" className='form-control' placeholder='Enter Password'/>
                <button className="eyeAction">
                  <AiFillEye/>
                  {/* <AiFillEyeInvisible /> */}
                </button>
            </div>
            <p className='error danger'></p>
        </div>
        <button className='btn mainBtn fillBtn'>Login</button>
        <p className="forgotPassword"><Link className="link" href="#">Forgot Password?</Link></p>

        <p className="orLogin"><span>or</span></p>

        <button className="gamilSignup">
            <Image src={google} alt="google" />
            <p>Continue with Google</p>
        </button>

        <p className="switchScreen">Don't have an account? <Link className="link" href="#">Signup</Link></p>
    </UserForm>
  )
}

export default UserAuth