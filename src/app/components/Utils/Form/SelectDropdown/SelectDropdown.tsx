'use client'
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

export interface MyOption {
    value: string;
    label: string;
    [otherProps: string]: any; // Allow for additional properties
  }

interface InputInterface {
    placeholder?: string,
    setValue?: React.Dispatch<React.SetStateAction<string>>,
    value?: string,
    verifyClick?: React.Dispatch<React.SetStateAction<boolean>>,
    options?: MyOption[]
}
// const options = [
//     { value: 'furniture', label: 'Furniture' },
//     { value: 'cars', label: 'Cars' },
//     { value: 'property', label: 'Property' },
//     { value: 'electronic', label: 'Electronic' }
// ]

const SelectDropdown: React.FC<InputInterface> = ({ placeholder, setValue, value, options }) => {
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

    const onChangerHandler = (e: any) => {
        const val = e.value
        console.log("asdasd",e)
        if(val !== ""){
            setValue !== undefined &&   setValue(val)
            setHasValue(true)
        }
    }
    useEffect(() => {
        if(menuIsOpen){
            setHasValue(true)
        }
    },[menuIsOpen])

    console.log("hasValue", hasValue)
    return (
        <div className="formGroup">
            <div className='selectDropDown'>
                <div className='formGroupMain'>
                    <Select autoFocus={true} value={value} options={options} placeholder="" onChange={onChangerHandler}/>
                    <label htmlFor={newID} className={hasValue ? 'formLabel active' : 'formLabel'}>{placeholder}</label>
                </div>
            </div>
            <p className='error danger'></p>
        </div>
    );
};

export default SelectDropdown;