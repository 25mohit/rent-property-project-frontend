'use client'
import React from "react";
import UserForm from '../components/HOC/UserForm/UserForm'
import Image from "next/image";
import { google } from "../../../public/images";
import Link from "next/link";
import InputField from "../components/Utils/Form/InputField/InputField";

const Login = () => {
  return (
    <UserForm title="Welcome to login">
        <div className="topHead flex justify-between">
          {/* <button className="backBtn"><IoArrowBack /></button> */}
            <Link className="link" href="#">Skip {'>'}{'>'} </Link>
        </div>
        <div className="pageTitle">
        <h2 className="pageTitle">Welcome to login</h2>
        </div>
        <InputField type="text" placeholder="Email Address" required/>
        <InputField type="password" placeholder="Password" />
       
        <Link href="/Testing" className='btn mainBtn fillBtn' >Login</Link>
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