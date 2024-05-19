'use client'
import React, { useState } from 'react';
import { MdClose, MdOutlineCurrencyRupee } from 'react-icons/md';


interface ModalInterface {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
}

const ShareListModal: React.FC<ModalInterface> = ({ isOpen, setIsOpen }) => {



    function togglePopup() {
        setIsOpen(false);
    }
    return (


        <div className={`modalPopup ${isOpen ? 'active' : ''}`}>
            <div className='overlayBg' onClick={togglePopup}></div>
            <div className='modalDialog'>
                <div className="modalContent">
                    <div className='modalHead'>
                        <h5>Total Refers</h5>
                        <button className='closeIcon' onClick={togglePopup}><MdClose /></button>
                    </div>
                    <div className='modalPopupBody' style={{ padding:'0' }}>
                        <ul className='sharingList'>
                            <li>
                                <div className="left">
                                   <h3 className='textLimit l1'>Surendra Kumar</h3>  
                                   <small className='error success'>Success</small>
                                </div>
                                <h6 className='amount'><MdOutlineCurrencyRupee className="icon" /> 10</h6>
                            </li>
                            <li>
                                <div className="left">
                                   <h3 className='textLimit l1'>Surendra Kumar</h3>  
                                   <small className='error success'>Success</small>
                                </div>
                                <h6 className='amount'><MdOutlineCurrencyRupee className="icon" /> 10</h6>
                            </li>
                            <li>
                                <div className="left">
                                   <h3 className='textLimit l1'>Surendra Kumar</h3>  
                                   <small className='error success'>Success</small>
                                </div>
                                <h6 className='amount'><MdOutlineCurrencyRupee className="icon" /> 10</h6>
                            </li>
                            <li>
                                <div className="left">
                                   <h3 className='textLimit l1'>Surendra Kumar</h3> 
                                   <small className='error danger'>Pending</small>
                                </div>
                                <h6 className='amount'><MdOutlineCurrencyRupee className="icon" /> 10</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ShareListModal;