"use client"
import React, { useEffect, useState } from 'react'
import { AiFillEye } from 'react-icons/ai';

interface InputInterface{
    type?: string,
    placeholder: string,
    min?: string,
    max?: string,
    field?: string,
    label?: string,
    mobileVerify?: string,
    verifyClick?: React.Dispatch<React.SetStateAction<boolean>>,
    required?: any,
    onChange? : (event: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    name?: string

}
const InputField:React.FC<InputInterface> = ({ type, placeholder, name, value, onChange, min, max, field, label,mobileVerify, verifyClick, required }) => {
    // const [hasValue, setHasValue] = useState(false);
    const [newID, setNewID] = useState('');
    const [tooglePassword, setTooglePassword] = useState('')

    // const handleInputChange = (event: any) => {
    //     setHasValue(event.target.value !== '');
    // };

    // console.log("required", required);
    
    useEffect(() => {
      function generateRandomNumber() {
        const currentTime = Date.now(); // Get the current timestamp
        const randomNumber = Math.floor(Math.random() * currentTime); // Generate a random number based on the current timestamp
        return `${randomNumber}`;
      }
      setNewID(generateRandomNumber())
    },[])
    
    const tooglePasswordVisible = () => {
      // console.log("typetype", type, tooglePassword);
      if(tooglePassword === "text") setTooglePassword('password')
      else setTooglePassword('text')
    }
    console.log("tooglePassword", tooglePassword , "+", type);
    
  return (
    <div className='formGroup'> 
      <div className='formGroupMain'>
        <input type={tooglePassword === '' ? type : tooglePassword} name={name} onChange={onChange} id={newID} className={`form-control ${field === "mobile" ? 'phoneNumberSpace' : ''}`} min={min} max={max}/>
        <label htmlFor={newID} className={value ? 'formLabel active' : 'formLabel'}>{placeholder} { required !== undefined && required && <span className='requiredStar'>*</span>}</label>
        { field === "mobile" && <span className='countryCode'>{label}</span>}
        { type === "password" && <button type="button" onClick={tooglePasswordVisible} className="eyeAction"><AiFillEye id="show-pass-btn"/></button> }
        { type === "email" && <button type="button" className='getOtpBtn' id="verify-btn" onClick={() => verifyClick && verifyClick(prev => !prev)}>Get OTP</button> }
        { mobileVerify === "mobileVerify" && <button type="button" className='getOtpBtn' id="verify-btn" onClick={() => verifyClick && verifyClick(prev => !prev)}>Get OTP</button> }
      </div>
      <p className='error danger'></p>
    </div>
  )
}

export default InputField