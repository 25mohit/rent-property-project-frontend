'use client'
import React, { useState } from 'react';
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack, IoHeartOutline, IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineMoreVert } from "react-icons/md";
import { prImg1, prImg2, prImg3, profileImg } from "../../../public/images";
import Image from "next/image";
import { GoLocation } from 'react-icons/go';
import Link from 'next/link';
import { FaCircleCheck } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { TbDiscountCheckFilled } from 'react-icons/tb';

const ChatDetails = () => {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <>
      <SingleContentLayout>
        <div className='spaceLessDetails'>
          <div className="headerBar detailsHeader chatDetailsHeader active">
            <div className="col leftMenu">
              <button className="btn menuBtn"><IoArrowBack /></button>
              <div className='userImage'>
                <Image src={prImg1} alt="property" className="imgBox" />
                <Image src={profileImg} alt="property" className="userProfile" />
              </div>
            </div>
            <div className="col rightMenu">
              <ul className="headerAction">
                <li>
                  <div className="dropdownMenu">
                    <button className="btn notification"><MdOutlineMoreVert className="icon" /></button>
                    <div className="dropdownBody">
                      <ul>
                        <li><button>Delete Chat</button></li>
                        <li><button>Report User</button></li>
                      </ul>
                    </div>
                  </div></li>
              </ul>
            </div>
          </div>

      
        </div>
      </SingleContentLayout>
    </>
  );
};

export default ChatDetails;