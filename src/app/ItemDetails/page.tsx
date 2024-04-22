import React from "react";
import SingleContentLayout from "../components/HOC/Layout/SingleContentLayout";
import { IoArrowBack } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";

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
            <li><button className="btn search"><FiSearch /></button></li>
            <li><button className="btn notification"><MdNotificationsNone /></button></li>
          </ul>
        </div>
      </div>
   </SingleContentLayout>
   </>
  );
};

export default ItemDetails;