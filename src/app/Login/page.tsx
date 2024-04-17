'use client'
import React, { useLayoutEffect, useState } from "react";
import UserForm from '../components/HOC/UserForm/UserForm'
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import { google } from "../../../public/images";
import Link from "next/link";

const Login = () => {
  const [containerH, setContainerH] = useState(0)

  useLayoutEffect(() => {
    const setContainerHeight = () => {
      const navElement = document.querySelector('.lessSpace1') as HTMLElement;
      const bottomElement = document.querySelector('.lessSpace2') as HTMLElement;

      if (navElement && bottomElement) {
        const navHeight = navElement?.offsetHeight ;
        const bottomHeight = bottomElement?.offsetHeight;
        const windowHeight = window.innerHeight;
        const containerHeight = windowHeight - navHeight - bottomHeight;

        const containers = document.querySelectorAll('.mainPlayArea');
        containers.forEach(container => {
            (container as HTMLElement).style.height = `${containerHeight}px`;
        });
        setContainerH(containerHeight)
      }
    };

    setContainerHeight();

    window.addEventListener("resize", setContainerHeight);
    document.addEventListener("DOMContentLoaded", setContainerHeight);

    return () => {
      window.removeEventListener("resize", setContainerHeight);
      document.removeEventListener("DOMContentLoaded", setContainerHeight);
    };
  }, []);

  return (
    <UserForm title="Welcome to login">
        <div className="topHead flex justify-between">
          {/* <button className="backBtn"><IoArrowBack /></button> */}
            <Link className="link" href="#">Skip {'>'}{'>'} </Link>
        </div>
        <h2 className="pageTitle">Welcome to login</h2>
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

        <p className="switchScreen">Don't have an account? <Link className="link" href="#">Signup</Link></p>
    </UserForm>
  );
};

export default Login;