import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { FiSearch, FiUser } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { GoComment, GoHeart, GoLocation, GoTasklist } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { profileImg } from "../../../../../public/images";
import Image from "next/image";
import Link from "next/link";
import { LiaAngleRightSolid } from "react-icons/lia";

const HeaderBar = () => {

  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <>
      <div className="headerBar">
        <div className="col leftMenu">
          <button className="btn menuBtn"onClick={toggleSidebar}><MdMenu /></button>
          <div className="location">
            <GoLocation className="icon" />
            <div className="locationBody">
              <h5>Location
                <FaAngleDown className="arrow" /></h5>
              <p>Jhothawara, Jaipur, 302020
              </p>
            </div>
          </div>
        </div>
        <div className="col rightMenu">
          <ul className="headerAction">
            <li><button className="btn search"><FiSearch /></button></li>
            <li><button className="btn notification"><MdNotificationsNone /></button></li>
          </ul>
        </div>
      </div>

      <div className={`sideBar ${sidebarActive ? 'active' : ''}`} id="sidebarMenu">
      <div className="overlayBg" id="hideSidebar" onClick={toggleSidebar}></div>
        <div className="sideBarBody">
          <div className="nameProfile lessSpace" id="nameProfile">
            <span className="profileImg">
              <Image src={profileImg} alt="profileImg" className="userImg" />
            </span>
            <div className="nameProfileBody">
              <h5 className="textLimit l1">Jitendra Kumar Prajapat</h5>
              <p className="textLimit l1">jkdesigner62@gmail.com</p>
            </div>
          </div>

          <ul className="menuList">
            <li>
              <Link className="link" href="#">
                <span className="icon"><FiUser /></span>
                <h6 className="textLimit l1">Edit Profile</h6>
                <LiaAngleRightSolid className="arrow" />
              </Link>
            </li>
            <li>
              <Link className="link" href="#">
                <span className="icon"><GoHeart /></span>
                <h6 className="textLimit l1">Whishlist</h6>
                <LiaAngleRightSolid className="arrow" />
              </Link>
            </li>
            <li>
              <Link className="link" href="#">
                <span className="icon"><GoTasklist /></span>
                <h6 className="textLimit l1">My Listing</h6>
                <LiaAngleRightSolid className="arrow" />
              </Link>
            </li>
            <li>
              <Link className="link" href="#">
                <span className="icon"><GoComment /></span>
                <h6 className="textLimit l1">Chat</h6>
                <LiaAngleRightSolid className="arrow" />
              </Link>
            </li>
          </ul>
          <div className='fixSidebarBtn'>
            <Link href="#" className="btn">Logout</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderBar