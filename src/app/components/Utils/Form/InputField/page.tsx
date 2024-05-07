

const InputField = () => {
  return (
   <div className="formGroup">
        <label className="formLabel">Email Address</label>
        <input type="email" className='form-control' placeholder='Enter Your Email Address'/>
        <p className='error danger'></p>
    </div>
  )
}

export default InputField