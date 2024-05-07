import React from "react"

interface InputInterface{
  label?: string
}

const InputField:React.FC<InputInterface> = ({ label }) => {
  return (
   <div className="formGroup">
        <label className="formLabel">{label}</label>
        <input type="email" className='form-control' placeholder='Enter Your Email Address'/>
        <p className='error danger'></p>
    </div>
  )
}

export default InputField