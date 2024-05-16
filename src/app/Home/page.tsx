'use client'
import React, { useState } from 'react';
import MultiContentLayout from "../components/HOC/Layout/MultiContentLayout";
import PropertyCard from "../components/Utils/PropertyCard/PropertyCard";
import { MdFilterAlt } from "react-icons/md";
import FilterModal from '../components/Utils/Modals/FilterModal';
import HomeLoader from '../components/Utils/SkeletonLoader/HomeLoader';
import CategoryListBar from '../components/Utils/CategoryListBar/CategoryListBar';

const HomePage = () => {

    const [isPopupActive, setIsPopupActive] = useState(false);

    const togglePopup = () => {
        setIsPopupActive(!isPopupActive);
    };

    return (
        <MultiContentLayout>
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

        </MultiContentLayout>

    );
};

export default HomePage;