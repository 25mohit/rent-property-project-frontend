'use client'
import React, { useEffect, useState } from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';

interface MyOption {
    value: string;
    label: string;
  }

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
    const [selectedOption, setSelectedOption] = useState<MyOption | null>(null);

    useEffect(() => {
        function generateRandomNumber() {
            const currentTime = Date.now(); // Get the current timestamp
            const randomNumber = Math.floor(Math.random() * currentTime); // Generate a random number based on the current timestamp
            return `${randomNumber}`;
        }
        setNewID(generateRandomNumber())
    }, [])

    // const onChangerHandler = (e: any) => {
    //     const val = e.value
    //     console.log("asdasd",e)
    //     if(val !== ""){
    //         setValue !== undefined &&   setValue(val)
    //         setHasValue(true)
    //     }
    // }

  const handleChange = (val: any) => {
    console.log("newValue", val, value);
    setValue(val)
  };

  useEffect(() => {
    console.log("value", value);
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

    console.log("hasValue", hasValue, menuIsOpen)
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
                    {/* <Select onMenuOpen={() => setMenuIsOpen(true)} onMenuClose={() => setMenuIsOpen(false)}  autoFocus={true} value={value} options={options} placeholder="" onChange={onChangerHandler}/> */}
                    <label htmlFor={newID} className={hasValue ? 'formLabel active' : 'formLabel'}>{placeholder}</label>
                </div>
            </div>
            <p className='error danger'></p>
        </div>
    );
};

export default SelectDropdown;