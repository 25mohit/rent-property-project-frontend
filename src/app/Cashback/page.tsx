"use client"
import React, { useState } from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import CalculateFontSize from "../components/HOC/Layout/CalculateFontSize";
import Link from "next/link";
import WithdrawalModal from "../components/Utils/Modals/WithdrawalModal";

const Cashback = () => {
    const router = useRouter()
    const handleBack = () => {
        router.back()
    }
    const [isPopupActive, setIsPopupActive] = useState(false);

    const togglePopup = () => {
        setIsPopupActive(!isPopupActive);
    };
    return (
        <CalculateFontSize>
            <SingleContentLayout>
                <div className="headerBar innerHeader">
                    <div className="col"><button className="btn backBtn" onClick={handleBack}><IoArrowBack /></button>
                    </div>
                    <div className="col centerTitle">
                        <h5 className='dTitle textLimit l1'>Cashback</h5>
                    </div>
                    <div className="col"></div>
                </div>

                <div className="defaultSpace">
                    <div className="cashbackCard">
                        <label>Balance Available</label>
                        <h3>₹220.57</h3>
                    </div>
                    <button className='btn mainBtn fillBtn' onClick={togglePopup}>Withdrawal</button>
                    <p className="transationLink"><Link className="link" href="/Transaction">Transaction</Link></p>
                </div>


                <WithdrawalModal isOpen={isPopupActive} setIsOpen={setIsPopupActive} />
            </SingleContentLayout>
        </CalculateFontSize>
    );
};

export default Cashback;