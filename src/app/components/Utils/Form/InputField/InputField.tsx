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
    verifyClick?: React.Dispatch<React.SetStateAction<boolean>>
}
const InputField:React.FC<InputInterface> = ({ type, placeholder, min, max, field, label, verifyClick }) => {
    const [hasValue, setHasValue] = useState(false);
    const [newID, setNewID] = useState('');

    const handleInputChange = (event: any) => {
        setHasValue(event.target.value !== '');
    };

    useEffect(() => {
      function generateRandomNumber() {
        const currentTime = Date.now(); // Get the current timestamp
        const randomNumber = Math.floor(Math.random() * currentTime); // Generate a random number based on the current timestamp
        return `${randomNumber}`;
      }
      setNewID(generateRandomNumber())
    },[])
    
    // console.log("generateRandomNumber", generateRandomNumber())
  return (
    <div className='formGroup'> 
      <div className='formGroupMain'>
        <input type={type} id={newID} className={`form-control ${field === "mobile" ? 'phoneNumberSpace' : ''}`} min={min} max={max} onChange={handleInputChange}/>
        <label htmlFor={newID} className={hasValue ? 'formLabel active' : 'formLabel'}>{placeholder}<span className='requiredStar'>*</span></label>
        { field === "mobile" && <span className='countryCode'>{label}</span>}
        { type === "password" && <button type="button" className="eyeAction"><AiFillEye id="show-pass-btn"/></button> }
        { type === "email" && <button type="button" className='getOtpBtn' id="verify-btn" onClick={() => verifyClick && verifyClick(prev => !prev)}>Get OTP</button> }
      </div>
      <p className='error danger'></p>
    </div>
  )
}

export default InputField