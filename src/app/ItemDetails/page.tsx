'use client'
import React, { useState } from 'react';
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack, IoHeartOutline, IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineMoreVert } from "react-icons/md";
import { prImg1, prImg2, prImg3 } from "../../../public/images";
import Image from "next/image";
import { GoLocation } from 'react-icons/go';
import Link from 'next/link';
import { FaCircleCheck } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { TbDiscountCheckFilled } from 'react-icons/tb';

const ItemDetails = () => {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <>
      <SingleContentLayout>
        <div className='spaceLessDetails'>
          <div className="headerBar detailsHeader">
            <div className="col leftMenu">
              <button className="btn menuBtn"><IoArrowBack /></button>
            </div>
            <div className="col rightMenu">
              <ul className="headerAction">
                <li><button className="btn"><IoHeartOutline /></button></li>{/* <IoHeartSharp /> */}
                <li><button className="btn"><IoShareSocialSharp /></button></li>
                <li>
                  <div className="dropdownMenu">
                    <button className="btn notification"><MdOutlineMoreVert className="icon" /></button>
                    <div className="dropdownBody">
                      <ul>
                        <li><button>Edit</button></li>
                        <li><button>Deactive</button></li>
                        <li><button>Delete</button></li>
                      </ul>
                    </div>
                  </div></li>
              </ul>
            </div>
          </div>

          <div className="sliderItem scroll2">
            <figure className="itemImg"><Image src={prImg3} alt="prImg1" /></figure>
            <figure className="itemImg"><Image src={prImg2} alt="prImg1" /></figure>
            <figure className="itemImg"><Image src={prImg1} alt="prImg1" /></figure>
            <figure className="itemImg"><Image src={prImg2} alt="prImg1" /></figure>
          </div>

          <div className="ItemsContentBody">
            <div className="titleDetails">
              <h3 className="itemName">Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h3>
              <p className="location textLimit l1">
                <GoLocation className="icon" /> Airport Road, Ahmedabad Airport Road, Ahmedabad</p>
              <div className="priceTime">
                <h4 className="itemPrice">₹ 2,25,000</h4>
                <span className="time">3 hrs ago</span>
              </div>
            </div>


            <div className="featuresBox">
              <div className="menuTab">
                <button
                  id="tabAction1"
                  className={activeTab === 1 ? 'active' : ''}
                  onClick={() => handleTabClick(1)}
                >
                  Specification
                </button>
                <button
                  id="tabAction2"
                  className={activeTab === 2 ? 'active' : ''}
                  onClick={() => handleTabClick(2)}
                >
                  Description
                </button>
              </div>
              <div id="tabActionBody1" className={activeTab === 1 ? 'specifitionList' : 'hidden'}>
                <ul>
                  <li>
                    <span>Model</span>
                    <span>2015</span>
                  </li>
                  <li>
                    <span>Type</span>
                    <span>Petrol</span>
                  </li>
                  <li>
                    <span>Model</span>
                    <span>2015</span>
                  </li>
                  <li>
                    <span>Type</span>
                    <span>Petrol</span>
                  </li>
                  <li>
                    <span>Model</span>
                    <span>2015</span>
                  </li>
                  <li>
                    <span>Type</span>
                    <span>Petrol</span>
                  </li>
                  <li>
                    <span>Model</span>
                    <span>2015</span>
                  </li>
                  <li>
                    <span>Type</span>
                    <span>Petrol</span>
                  </li>
                  <li>
                    <span>Model</span>
                    <span>2015</span>
                  </li>
                  <li>
                    <span>Type</span>
                    <span>Petrol</span>
                  </li>
                  <li>
                    <span>Model</span>
                    <span>2015</span>
                  </li>
                  <li>
                    <span>Type</span>
                    <span>Petrol</span>
                  </li>
                </ul>
              </div>
              <div id="tabActionBody2" className={activeTab === 2 ? 'descriptionList' : 'hidden'}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the industry's standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged.
                </p>
              </div>
            </div>


            <div className='detailsFixBtn'>
              <button className='mainBtn borderBtn'>Call</button>
              <button className='mainBtn fillBtn'>Chat</button>
            </div>
          </div>


          <div className='googleMap'>
          <iframe className='MapBox' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.43601861503!2d75.62574093351257!3d26.885421393350004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1713976333520!5m2!1sen!2sin"></iframe>
          </div>
          <Link href="#" className='sellerCard'>
              <h6>Seller Details</h6>
              <div className='sellerBox'>
              <Image src={prImg3} alt="prImg1" className='img' />
              <h5><span className='textLimit l1'>Jitendra Kumar Prajapat</span> <TbDiscountCheckFilled className='blueTik' /></h5>
              <IoIosArrowForward className='arrow' />
              </div>
          </Link>

        </div>
      </SingleContentLayout>
    </>
  );
};

export default ItemDetails;