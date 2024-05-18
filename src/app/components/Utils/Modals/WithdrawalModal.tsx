'use client'
import React, { useState } from 'react';
import { MdClose, MdOutlineCurrencyRupee } from 'react-icons/md';


interface ModalInterface {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
}

const WithdrawalModal: React.FC<ModalInterface> = ({ isOpen, setIsOpen }) => {

    function togglePopup() {
        setIsOpen(false);
    }
    return (


        <div className={`modalPopup ${isOpen ? 'active' : ''}`}>
            <div className='overlayBg' onClick={togglePopup}></div>
            <div className='modalDialog'>
                <div className="modalContent">
                    <div className='modalHead'>
                        <h5>Withdrawal</h5>
                        <button className='closeIcon' onClick={togglePopup}><MdClose /></button>
                    </div>
                    <div className='modalPopupBody'>
                        <div className='confirmAccountDetails'>
                            <h2>Amount : 50</h2>
                            <h3>Jitendra Kumar</h3>
                            <ul>
                              <li>Account Number : XXXXXXXXX987</li>
                            </ul> 
                        </div>
                        <button className='btn mainBtn fillBtn' onClick={togglePopup}>Withdrawal Request</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default WithdrawalModal;