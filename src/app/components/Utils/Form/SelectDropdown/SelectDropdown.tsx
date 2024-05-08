'use client'
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

  interface SelectInterface{
    options?: any,
    placeholder?: string,
    value?: string, 
    setValue?: any
  }

const SelectDropdown: React.FC<SelectInterface> = ({ placeholder, setValue, value, options }) => {
    const [newID, setNewID] = useState('');
    const [hasValue, setHasValue] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    useEffect(() => {
        function generateRandomNumber() {
            const currentTime = Date.now(); // Get the current timestamp
            const randomNumber = Math.floor(Math.random() * currentTime); // Generate a random number based on the current timestamp
            return `${randomNumber}`;
        }
        setNewID(generateRandomNumber())
    }, [])

  const handleChange = (val: any) => {
    setValue(val)
  };

  useEffect(() => {
    if(value && Object.keys(value)?.length > 0){
        setHasValue(true)
    } else {
        setHasValue(false)
    }
  },[value])

    useEffect(() => {
        if(menuIsOpen){
            setHasValue(true)
        } else if(!menuIsOpen && !value) {
            setHasValue(false)
        }
    },[menuIsOpen])

    return (
        <div className="formGroup">
            <div className='selectDropDown'>
                <div className='formGroupMain'>
                <Select
                    options={options}
                    value={value}
                    onChange={handleChange}
                    onMenuOpen={() => setMenuIsOpen(true)} 
                    onMenuClose={() => setMenuIsOpen(false)}  
                    />
                    <label htmlFor={newID} className={hasValue ? 'formLabel active' : 'formLabel'}>{placeholder}</label>
                </div>
            </div>
            <p className='error danger'></p>
        </div>
    );
};

export default SelectDropdown;