import React, { useState } from 'react'
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

    const handleInputChange = (event: any) => {
        setHasValue(event.target.value !== '');
    };
    
  return (
    <div className='formGroup'>
      <div className='formGroupMain'>
        <input type={type} id='field-input' className={`${field === "mobile" ? 'form-control' : 'form-control'}`} min={min} max={max} onChange={handleInputChange}/>
        <label htmlFor="field-input" className={hasValue ? 'formLabel active' : 'formLabel'}>{placeholder}</label>
        { field === "mobile" && <span className='countryCode'>+91</span>}
        { type === "password" && <button type="button" className="eyeAction"><AiFillEye id="show-pass-btn"/></button> }
        { type === "email" && <button className='getOtpBtn' id="verify-btn" onClick={() => verifyClick && verifyClick(prev => !prev)}>Get OTP</button> }
      </div>
      <p className='error danger'></p>
    </div>
  )
}

export default InputField