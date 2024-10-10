"use client"
import React from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import { prImg3 } from "../../../public/images";
import { TbDiscountCheckFilled } from "react-icons/tb";
import Image from "next/image";
import PropertyCard from "../components/Utils/PropertyCard/PropertyCard";
import { MdOutlineMoreVert } from "react-icons/md";
import { useRouter } from "next/navigation";


const SellerProduct = () => {
    const router = useRouter()
const handleBack = () => {
	router.back()
}
    return (
        <>
            <SingleContentLayout>
                <div className="headerBar innerHeader">
                    <div className="col"><button className="btn backBtn" onClick={handleBack}><IoArrowBack /></button>
                    </div>
                    <div className="col centerTitle">
                        <h5 className='dTitle textLimit l1'></h5>
                    </div>
                    <div className="col">
                        <ul className="headerAction">
                            <li>
                                <div className="dropdownMenu">
                                    <button className="btn notification"><MdOutlineMoreVert className="icon" /></button>
                                    <div className="dropdownBody">
                                        <ul>
                                            <li><button>Share Profile</button></li>
                                            <li><button>Report User</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="">
                    <div className='sellerCardPrd'>
                        <div className='sellerBox'>
                            <Image src={prImg3} alt="prImg1" className='img' />
                            <h4><span className='textLimit l1'>Mohit Agarwal</span> <TbDiscountCheckFilled className='blueTik' /></h4>
                        </div>
                        <h6>Member Since : May 2022</h6>
                        <h6>Total Items : 12</h6>
                    </div>


                    <div className="row listingProduct">
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
                </div>
            </SingleContentLayout >
        </>
    );
};

export default SellerProduct;