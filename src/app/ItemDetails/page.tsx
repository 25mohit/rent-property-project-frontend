import React from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack, IoHeartOutline, IoShareSocialSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdMoreHoriz, MdNotificationsNone, MdOutlineMoreVert } from "react-icons/md";
import { prImg1, prImg2 } from "../../../public/images";
import Image from "next/image";

const ItemDetails = () => {
  return (
    <>
      <SingleContentLayout>
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
                      <li><button>Delete</button></li>
                    </ul>
                  </div>
                </div></li>
            </ul>
          </div>
        </div>

        <div className="sliderItem scroll2">
          <figure className="itemImg"><Image src={prImg1} alt="prImg1" /></figure>
          <figure className="itemImg"><Image src={prImg2} alt="prImg1" /></figure>
          <figure className="itemImg"><Image src={prImg1} alt="prImg1" /></figure>
          <figure className="itemImg"><Image src={prImg2} alt="prImg1" /></figure>

        </div>

        <div className="ItemsContentBody">
          <div className="titleDetails">
            <div className="left">
              <h3 className="itemName">Toyota Etios Liva G SP</h3>
              <h4 className="itemPrice">₹ 2,25,000</h4>
            </div>
          </div>

          
          <div className="featuresBox">
              <div className="menuTab">
                <button className="active">Specification</button>
                <button>Description</button>
              </div>

              <div className="specifitionList">
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
          </div>
        </div>
      </SingleContentLayout>
    </>
  );
};

export default ItemDetails;