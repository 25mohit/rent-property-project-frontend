import React from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { MdOutlineMoreVert } from "react-icons/md";
import NotificationLoader from "../components/Utils/SkeletonLoader/NotificationLoader";

const Notifications = () => {
    return (
        <SingleContentLayout>
            <div className="headerBar innerHeader">
                <div className="col">
                    <Link href="/Chat" className="btn backBtn"><IoArrowBack /></Link>
                </div>
                <div className="col centerTitle">
                    <h5 className='dTitle textLimit l1'>Notifications</h5>
                </div>
                <div className="col"></div>
            </div>

            <div className="">
                <NotificationLoader />
                <div className="notificationList">
                    <ul>
                        <li className="active">
                            <div className="notificationBody">
                                <p>Your Item <b>iPhone 15 pro max</b> is live now.</p>
                                <time>5 May, <span>5:26 PM</span></time>
                            </div>
                            <div className="dropdownMenu">
                                <button className="btn notification"><MdOutlineMoreVert className="icon" /></button>
                                <div className="dropdownBody">
                                    <ul>
                                        <li><button>Delete</button></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="notificationBody">
                                <p>Your Item <b>iPhone 15 pro max</b> is live now.</p>
                                <time>5 May, <span>5:26 PM</span></time>
                            </div>
                            <div className="dropdownMenu">
                                <button className="btn notification"><MdOutlineMoreVert className="icon" /></button>
                                <div className="dropdownBody">
                                    <ul>
                                        <li><button>Delete</button></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="notificationBody">
                                <p>Your Item <b>iPhone 15 pro max</b> is live now.</p>
                                <time>5 May, <span>5:26 PM</span></time>
                            </div>
                            <div className="dropdownMenu">
                                <button className="btn notification"><MdOutlineMoreVert className="icon" /></button>
                                <div className="dropdownBody">
                                    <ul>
                                        <li><button>Delete</button></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </SingleContentLayout>
    );
};

export default Notifications;