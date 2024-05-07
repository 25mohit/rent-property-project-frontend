import React from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { AiFillEye } from "react-icons/ai";
import { LiaAngleRightSolid } from "react-icons/lia";

const Settings = () => {
    return (
        <SingleContentLayout>
            <div className="headerBar innerHeader">
                <div className="col">
                    <Link href="/Chat" className="btn backBtn"><IoArrowBack /></Link>
                </div>
                <div className="col centerTitle">
                    <h5 className='dTitle textLimit l1'>Settings</h5>
                </div>
                <div className="col"></div>
            </div>

            <div className="settingsMenu">
                <ul className="menuList" style={{ height: 'calc(100vh - 1rem)' }}>
                    <li>
                        <Link className="link" href="/ChangePassword">
                            <h6 className="textLimit l1">Change Password</h6>
                            <LiaAngleRightSolid className="arrow" />
                        </Link>
                    </li>
                    <li>
                        <Link className="link" href="/Help">
                            <h6 className="textLimit l1">Help & Support</h6>
                            <LiaAngleRightSolid className="arrow" />
                        </Link>
                    </li>
                    <li>
                        <Link className="link" href="/Privacy">
                            <h6 className="textLimit l1">Privacy Policy</h6>
                            <LiaAngleRightSolid className="arrow" />
                        </Link>
                    </li>
                    <li>
                        <Link className="link" href="/Terms">
                            <h6 className="textLimit l1">Terms & Conditions</h6>
                            <LiaAngleRightSolid className="arrow" />
                        </Link>
                    </li>
                </ul>

            </div>
        </SingleContentLayout>
    );
};

export default Settings;