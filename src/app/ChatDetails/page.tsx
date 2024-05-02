'use client'
import React, { useState } from 'react';
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack, } from "react-icons/io5";
import { MdOutlineMoreVert } from "react-icons/md";
import { prImg1,  profileImg } from "../../../public/images";
import Image from "next/image";
import Link from 'next/link';
import { FaCircleCheck, FaPaperPlane } from 'react-icons/fa6';

const ChatDetails = () => {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <>
      <SingleContentLayout>
        <div className='spaceLessDetailsChat'>
          <div className="headerBar detailsHeader chatDetailsHeader active">
            <div className="col leftMenu">
              <Link href="/Chat" className="btn menuBtn"><IoArrowBack /></Link>
              <div className='userImage'>
                <Image src={prImg1} alt="property" className="imgBox" />
                <Image src={profileImg} alt="property" className="userProfile" />
              </div>
              <h5 className='dTitle textLimit l1'>Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h5>
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

          <div className='priceLocation'>
            <h5 className='location textLimit l1'>Airport Road, Ahmedabad</h5>
            <h5 className='price textLimit l1'>₹ 2,25,000</h5>
          </div>

          <div className='chartUserBody'>
            <div className='timeBox'><span>30-04-2024</span></div>
            <div className='rightMgs'>
              <p>Hello, How are you?
                <time>11:08 pm</time>
              </p>
            </div>
            <div className='leftMgs'><p>Fine, and you?
              <time>11:08 pm</time></p></div>
            <div className='rightMgs'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              <time>11:08 pm</time></p></div>
            <div className='leftMgs'><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              <time>11:08 pm</time></p></div>
            <div className='rightMgs'>
              <p>Hello, How are you?
                <time>11:08 pm</time>
              </p>
            </div>
            <div className='timeBox'><span>30-04-2024</span></div>
            <div className='leftMgs'><p>Fine, and you?
              <time>11:08 pm</time></p></div>
            <div className='rightMgs'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              <time>11:08 pm</time></p></div>
            <div className='leftMgs'><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              <time>11:08 pm</time></p></div>
            <div className='rightMgs'>
              <p>Hello, How are you?
                <time>11:08 pm</time>
              </p>
            </div>
            <div className='leftMgs'><p>Fine, and you?
              <time>11:08 pm</time></p></div>
            <div className='rightMgs'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              <time>11:08 pm</time></p></div>
            <div className='leftMgs'><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              <time>11:08 pm</time></p></div>
          </div>

          <div className='submitForm'>
            <input type="text" className='form-control' placeholder='Message' />
            <button className='btn'><FaPaperPlane /></button>
          </div>
        </div>
      </SingleContentLayout>
    </>
  );
};

export default ChatDetails;