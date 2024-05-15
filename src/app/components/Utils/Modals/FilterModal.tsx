'use client'
import React, { useState } from 'react';
import SingleContentLayout from '../../HOC/Layout/SingleContentLayout';
import PriceFilter from '../PriceFilter/PriceFilter';

function valuetext(value: number) {
    return `${value}°C`;
}
interface ModalInterface{
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
}

const FilterModal:React.FC<ModalInterface> = ({ isOpen, setIsOpen }) => {

    const [activeTab, setActiveTab] = useState(2);

    const handleTabClick = (tabId: any) => {
        setActiveTab(tabId);
    };

  function togglePopup() {
    setIsOpen(false);
  }
    return (

            
            <div className={`bottomPopup ${isOpen ? 'active' : ''}`}>
                <div className='overlayBg' onClick={togglePopup}></div>
                <div className='bottomPopupBody'>
                    <div className='filterHead'>
                        <h5>Filter</h5>
                    </div>
                    <div className='filterTabbing'>
                        <div className='left'>
                            <ul>
                                <li onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''} id="tabId1">By Budget</li>
                                <li onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''} id="tabId2">By Sort</li>
                                <li onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''} id="tabId3">By Users</li>
                            </ul>
                        </div>
                        <div className='right'>
                            <div className='tabContent'>
                                <div className='tabPane' id="tabPaneBody1" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                                   <PriceFilter />
                                </div>
                                <div className='tabPane' id="tabPaneBody2" style={{ display: activeTab === 2 ? 'block' : 'none' }}>
                                    <ul className='sortOption'>
                                        <li className='active'>Price : Low to High</li>
                                        <li>Price : High to Low</li>
                                    </ul>
                                </div>
                                <div className='tabPane' id="tabPaneBody3" style={{ display: activeTab === 3 ? 'block' : 'none' }}>
                                    <ul className='sortOption'>
                                        <li className='active'>All Users</li>
                                        <li>Verified Users</li>
                                        <li>Unverified Users</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='fixFilterAction'>
                        <button className='mainBtn borderBtn' onClick={togglePopup}>Clear all</button>
                        <button className='mainBtn fillBtn' onClick={togglePopup}>Filter</button>
                    </div>
                </div>
            </div>


    );
};

export default FilterModal;