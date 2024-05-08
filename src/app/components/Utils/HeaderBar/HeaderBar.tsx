import React, { useState } from 'react';
import { MdClose, MdMenu } from "react-icons/md";
import { FiSearch, FiUser } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { GoComment, GoHeart, GoLocation, GoTasklist } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { profileImg } from "../../../../../public/images";
import Image from "next/image";
import Link from "next/link";
import { LiaAngleRightSolid } from "react-icons/lia";
import { IoArrowBack } from 'react-icons/io5';

const HeaderBar = () => {

  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const [isActive, setIsActive] = useState(false);

  const toggleSearchPopup = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="headerBar">
        <div className="col leftMenu">
          <button className="btn menuBtn" onClick={toggleSidebar}><MdMenu /></button>
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
            <li><button className="btn search" onClick={toggleSearchPopup}><FiSearch /></button></li>
            <li><Link href="/Notifications" className="btn notification"><MdNotificationsNone /></Link></li>
          </ul>
        </div>
      </div>

      <div className={`sideBar ${sidebarActive ? 'active' : ''}`} id="sidebarMenu">
        <div className="overlayBg" id="hideSidebar" onClick={toggleSidebar}></div>
        <div className="sideBarBody">

          {/* <div className="nameProfile lessSpace" id="nameProfile">
            <span className="profileImg">
              <Image src={profileImg} alt="profileImg" className="userImg" />
            </span>
            <div className="nameProfileBody">
              <h5 className="textLimit l1">Jitendra Kumar Prajapat</h5>
              <p className="textLimit l1">jkdesigner62@gmail.com</p>
            </div>
          </div> */}

          <div className="noLogin">
            <Link href="/Login" className='loginBtn'>Login</Link>
          </div>

          <ul className="menuList" style={{ height: 'calc(100vh - 1rem)' }}>
            <li>
              <Link className="link" href="/EditProfile">
                <span className="icon"><FiUser /></span>
                <h6 className="textLimit l1">Edit Profile</h6>
                <LiaAngleRightSolid className="arrow" />
              </Link>
            </li>
            <li>
              <Link className="link" href="/Whishlist">
                <span className="icon"><GoHeart /></span>
                <h6 className="textLimit l1">Whishlist</h6>
                <LiaAngleRightSolid className="arrow" />
              </Link>
            </li>
            <li>
              <Link className="link" href="/Listing">
                <span className="icon"><GoTasklist /></span>
                <h6 className="textLimit l1">My Listing</h6>
                <LiaAngleRightSolid className="arrow" />
              </Link>
            </li>
            <li>
              <Link className="link" href="/Chat">
                <span className="icon"><GoComment /></span>
                <h6 className="textLimit l1">Chat</h6>
                <LiaAngleRightSolid className="arrow" />
              </Link>
            </li>
            <li>
              <Link className="link" href="/Settings">
                <span className="icon"><GoComment /></span>
                <h6 className="textLimit l1">Settings</h6>
                <LiaAngleRightSolid className="arrow" />
              </Link>
            </li>

          </ul>

          {/* <div className='fixSidebarBtn'>
            <Link href="#" className="btn">Logout</Link>
          </div> */}

        </div>
      </div>

      <div className={`searchPage ${isActive ? 'active' : ''}`} id="searchPopupBody">
        <div className='searchForm'>
          <button onClick={toggleSearchPopup} className="btn backBtn"><IoArrowBack /></button>
          <div className='formIn'>
            <input type="text" className='form-control' placeholder='Search...' />
            <button className='searchBtn'><FiSearch /></button>
          </div>
        </div>
        <ul className='searchListHints scroll'>
          <li>
            <GoLocation className="icon" />
            <div className='left'>
              <h5>Cars</h5>
              <p>In Cars</p>
            </div>
          </li>
          <li>
            <GoLocation className="icon" />
            <div className='left'>
              <h5>Mobile Phone</h5>
              <p>In Electronics</p>
            </div>
          </li>

          <h6 className='searchTitle'>Recent Search</h6>
          <li>
            <GoLocation className="icon" />
            <div className='left'>
              <h5>Cars</h5>
              <p>In Cars</p>
            </div>
            <button className='closeSearch'><MdClose /></button>
          </li>
          <li>
            <GoLocation className="icon" />
            <div className='left'>
              <h5>Cars</h5>
              <p>In Cars</p>
            </div>
            <button className='closeSearch'><MdClose /></button>
          </li>
        </ul>
      </div>

      {/* <div className='bottomPopup'>
        <div className='overlayBg'></div>
        <div className='bottomPopupBody'>
          
        </div>
      </div> */}
    </>
  )
}

export default HeaderBar