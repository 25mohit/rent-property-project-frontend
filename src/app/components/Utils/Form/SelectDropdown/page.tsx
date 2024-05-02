'use client'
import React, { CSSProperties, ReactNode } from 'react';

import Select from 'react-select';
import {
    ColourOption,
    colourOptions,
    FlavourOption,
    GroupedOption,
    groupedOptions,
} from './data';



const SelectDropdown = () => {

    const groupStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };
    const groupBadgeStyles: CSSProperties = {
        backgroundColor: '#EBECF0',
        borderRadius: '2em',
        color: '#172B4D',
        display: 'inline-block',
        fontSize: 12,
        fontWeight: 'normal',
        lineHeight: '1',
        minWidth: 1,
        padding: '0.16666666666667em 0.5em',
        textAlign: 'center',
    };

    function formatGroupLabel(group: GroupedOption): ReactNode {
       throw new Error('Function not implemented.');
    }

    return (
        <>
            <Select<ColourOption | FlavourOption, false, GroupedOption>
                defaultValue={colourOptions[1]}
                options={groupedOptions}
                formatGroupLabel={formatGroupLabel}
            />
        </>
    );
};

export default SelectDropdown;