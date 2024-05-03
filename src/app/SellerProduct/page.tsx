import React from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { prImg3 } from "../../../public/images";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";


const SellerProduct = () => {
    return (
        <>
            <SingleContentLayout>
                <div className="headerBar innerHeader">
                    <div className="col">
                        <Link href="/Chat" className="btn backBtn"><IoArrowBack /></Link>
                    </div>
                    <div className="col centerTitle">
                        <h5 className='dTitle textLimit l1'>Privacy Policy</h5>
                    </div>
                    <div className="col"></div>
                </div>

                <div className="defaultSpace cmsPage">
                    <Link href="#" className='sellerCard'>
                        <div className='sellerBox'>
                            <Image src={prImg3} alt="prImg1" className='img' />
                            <h5><span className='textLimit l1'>Jitendra Kumar Prajapat</span> <TbDiscountCheckFilled className='blueTik' /></h5>
                        </div>
                    </Link>
                </div>
            </SingleContentLayout>
        </>
    );
};

export default SellerProduct;