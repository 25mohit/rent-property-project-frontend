"use client"
import React, { useEffect, useState } from 'react'
import { AiFillEye } from 'react-icons/ai';

interface InputInterface{
    value: string,
    supportMgs: string,
}
const DisabledField:React.FC<InputInterface> = ({  value,supportMgs }) => {
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
      <div className='formGroupMain disabledField'>
        <div id={newID} className={`form-control textLimit l1`} onChange={handleInputChange} >{value}</div>
      </div>
      <p className='error greyMgs'>{supportMgs}</p>
      <p className='error danger'></p>
    </div>
  )
}

export default DisabledField