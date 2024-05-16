'use client'
import CategoryListBar from '@/app/components/Utils/CategoryListBar/CategoryListBar';
import FilterModal from '@/app/components/Utils/Modals/FilterModal';
import PropertyCard from '@/app/components/Utils/PropertyCard/PropertyCard';
import HomeLoader from '@/app/components/Utils/SkeletonLoader/HomeLoader';
import React, { useState } from 'react';
import { MdFilterAlt } from 'react-icons/md';
const HomePage = () => {

    const [isPopupActive, setIsPopupActive] = useState(false);

    const togglePopup = () => {
        setIsPopupActive(!isPopupActive);
    };

    return (
        <>
            <CategoryListBar />
            <HomeLoader />
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
            <FilterModal isOpen={isPopupActive} setIsOpen={setIsPopupActive} />
        </>
    );
};

export default HomePage;