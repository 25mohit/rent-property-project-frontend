'use client'
import React, { useState } from 'react';


interface ModalInterface {
    isOpen: boolean,
    title: string,
    message: string,
    setIsOpen: (isOpen: boolean) => void,
}

const ConfirmationModal: React.FC<ModalInterface> = ({ isOpen, setIsOpen,title,message }) => {



    function togglePopup() {
        setIsOpen(false);
    }
    return (


        <div className={`modalPopup ${isOpen ? 'active' : ''}`}>
            <div className='overlayBg' onClick={togglePopup}></div>
            <div className='modalDialog'>
                <div className="modalContent">
                    <div className='modalHead'>
                        <h5>{title}</h5>
                    </div>
                    <div className='modalPopupBody'>
                        <h5>{message}</h5>
                        <div className="btnsAction">
                            <button className='mainBtn fillBtn' onClick={togglePopup}>Yes</button>
                            <button className='mainBtn borderBtn' onClick={togglePopup}>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ConfirmationModal;