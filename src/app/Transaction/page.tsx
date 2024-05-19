"use client"
import React from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import CalculateFontSize from "../components/HOC/Layout/CalculateFontSize";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Transaction = () => {
    const router = useRouter()
    const handleBack = () => {
        router.back()
    }

    return (
            <SingleContentLayout>
                <div className="headerBar innerHeader">
                    <div className="col"><button className="btn backBtn" onClick={handleBack}><IoArrowBack /></button>
                    </div>
                    <div className="col centerTitle">
                        <h5 className='dTitle textLimit l1'>Transition</h5>
                    </div>
                    <div className="col"></div>
                </div>

                <div className="">
                    <div className="historyList">
                        <div className="date">
                            <h5>18 May</h5>
                            <small>9:32 PM</small>
                        </div>
                        <div className="contentBox">
                            <h5>Manoj Cashback added</h5>
                            <small>ID: TX-1651804538</small>
                        </div>
                        <div className="status">
                            <h5>
                                <span className="error success"><MdOutlineCurrencyRupee className="icon" /> 10</span>
                                <small className="error success">Success</small>
                            </h5>
                        </div>
                    </div>
                    <div className="historyList">
                        <div className="date">
                            <h5>18 May</h5>
                            <small>9:32 PM</small>
                        </div>
                        <div className="contentBox">
                            <h5>Suresh Cashback added</h5>
                            <small>ID: TX-1651804538</small>
                        </div>
                        <div className="status">
                            <h5>
                                <span className="error success"><MdOutlineCurrencyRupee className="icon" /> 10</span>
                                <small className="error danger">Pending</small>
                            </h5>
                        </div>
                    </div>
                    <div className="historyList">
                        <div className="date">
                            <h5>18 May</h5>
                            <small>9:32 PM</small>
                        </div>
                        <div className="contentBox">
                            <h5>Withdrawal</h5>
                            <small>ID: TX-1651804538</small>
                        </div>
                        <div className="status">
                            <h5>
                                <span className="error danger"><MdOutlineCurrencyRupee className="icon" /> 50</span>
                                <small className="error danger">Pending</small>
                            </h5>
                        </div>
                    </div>
                </div>
            </SingleContentLayout>
    );
};

export default Transaction;