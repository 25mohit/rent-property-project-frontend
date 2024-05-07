'use client'
import React from 'react';

import Select from 'react-select';


const options = [
{ value: 'furniture', label: 'Furniture' },
{ value: 'cars', label: 'Cars' },
{ value: 'property', label: 'Property' },
{ value: 'electronic', label: 'Electronic' }
]

const SelectDropdown = () => {

    return (
        <div className='selectDropDown'>
            <Select options={options} />
        </div>
    );
};

export default SelectDropdown;