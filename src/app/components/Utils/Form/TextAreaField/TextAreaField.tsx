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
const TextAreaField:React.FC<InputInterface> = ({ type, placeholder, min, max, field, label, verifyClick }) => {
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
      <div className='formGroupMain textareaField'>
        <textarea id={newID} className={`form-control`} onChange={handleInputChange} />
        <label htmlFor={newID} className={hasValue ? 'formLabel active' : 'formLabel'}>{placeholder}<span className='requiredStar'>*</span></label>
      </div>
      <p className='error danger'></p>
    </div>
  )
}

export default TextAreaField