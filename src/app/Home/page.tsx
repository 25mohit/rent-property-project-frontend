'use client'
import React, { useState } from 'react';
import MultiContentLayout from "../components/HOC/Layout/MultiContentLayout";
import Image from "next/image";
import { electronic, furniture, property } from "../../../public/images";
import PropertyCard from "../components/Utils/PropertyCard/PropertyCard";
import { MdFilterAlt } from "react-icons/md";


const HomePage = () => {

    const [activeTab, setActiveTab] = useState(2);

    const handleTabClick = (tabId: any) => {
        setActiveTab(tabId);
    };

    const [isPopupActive, setIsPopupActive] = useState(false);

    const togglePopup = () => {
        setIsPopupActive(!isPopupActive);
    };

    return (

        <MultiContentLayout>
            <div className="categoyList">
                <ul className="scroll2">
                    <li>
                        <button className="link active">
                            <span><Image src={furniture} alt="furnture" className="icon" /></span>
                            <h5>Furniture</h5>
                        </button>
                    </li>
                    <li>
                        <button className="link">
                            <span><Image src={property} alt="property" className="icon" /></span>
                            <h5>Properties</h5>
                        </button>
                    </li>
                    <li>
                        <button className="link">
                            <span><Image src={electronic} alt="property" className="icon" /></span>
                            <h5>Electronic</h5>
                        </button>
                    </li>
                    <li>
                        <button className="link">
                            <span><Image src={furniture} alt="furnture" className="icon" /></span>
                            <h5>Furniture</h5>
                        </button>
                    </li>
                    <li>
                        <button className="link">
                            <span><Image src={property} alt="property" className="icon" /></span>
                            <h5>Properties</h5>
                        </button>
                    </li>
                    <li>
                        <button className="link">
                            <span><Image src={electronic} alt="property" className="icon" /></span>
                            <h5>Electronic</h5>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="row listingProduct bottomSpace">
                <div className="titleBox">
                    <div className="col"><h3 className="titleS">Nearest Products</h3></div>
                    <div className="col text-right">
                        <button className="filterBtn" onClick={togglePopup}><MdFilterAlt /> Filter</button>
                    </div>
                </div>
                <div className="col-6"><PropertyCard /></div>
                <div className="col-6"><PropertyCard /></div>
                <div className="col-6"><PropertyCard /></div>
                <div className="col-6"><PropertyCard /></div>
                <div className="col-6"><PropertyCard /></div>
                <div className="col-6"><PropertyCard /></div>
                <div className="col-6"><PropertyCard /></div>
                <div className="col-6"><PropertyCard /></div>
                <div className="col-6"><PropertyCard /></div>
                <div className="col-6"><PropertyCard /></div>
                <div className="col-6"><PropertyCard /></div>
                <div className="col-6"><PropertyCard /></div>
            </div>


            <div className={`bottomPopup ${isPopupActive ? 'active' : ''}`}>
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
                                </ul>
                            </div>
                            <div className='right'>
                                <div className='tabContent'>
                                    <div className='tabPane' id="tabPaneBody1" style={{ display: activeTab === 1 ? 'block' : 'none' }}>sd</div>
                                    <div className='tabPane' id="tabPaneBody2" style={{ display: activeTab === 2 ? 'block' : 'none' }}>
                                        <ul className='sortOption'>
                                            <li className='active'>Price : Low to High</li>
                                            <li>Price : High to Low</li>
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

        </MultiContentLayout>

    );
};

export default HomePage;