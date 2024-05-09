import React from "react";
import MultiContentLayout from "../components/HOC/Layout/MultiContentLayout";
import Image from "next/image";
import { prImg1, profileImg } from "../../../public/images";
import Link from "next/link";

const Chat = () => {
  return (
    
    <MultiContentLayout>
      <div className="row bottomSpace">
          <div className="titleBox fixTitle">
            <h3 className="titleS">Chats</h3>
          </div>

          <ul className="chatList">
            <li>
              <Link href="/ChatDetails" className="link active">
                <Image src={prImg1} alt="property" className="imgBox" />
                <Image src={profileImg} alt="property" className="userProfile" />

                <div className="contentBody">
                  <h3 className="textLimit l1">Jitendra Kumar Prajapat </h3> 
                  <p className="textLimit l1">Hello, suresh, please let me know price of this product</p>
                  <time>04 April, 2024   <span>03:26 PM</span></time>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/ChatDetails" className="link">
                <Image src={prImg1} alt="property" className="imgBox" />
                <Image src={profileImg} alt="property" className="userProfile" />

                <div className="contentBody">
                  <h3 className="textLimit l1">Jitendra Kumar Prajapat </h3> 
                  <p className="textLimit l1">Hello, suresh, please let me know price of this product</p>
                  <time>04 April, 2024   <span>03:26 PM</span></time>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/ChatDetails" className="link">
                <Image src={prImg1} alt="property" className="imgBox" />
                <Image src={profileImg} alt="property" className="userProfile" />

                <div className="contentBody">
                  <h3 className="textLimit l1">Jitendra Kumar Prajapat </h3> 
                  <p className="textLimit l1">Hello, suresh, please let me know price of this product</p>
                  <time>04 April, 2024   <span>03:26 PM</span></time>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/ChatDetails" className="link">
                <Image src={prImg1} alt="property" className="imgBox" />
                <Image src={profileImg} alt="property" className="userProfile" />

                <div className="contentBody">
                  <h3 className="textLimit l1">Jitendra Kumar Prajapat </h3> 
                  <p className="textLimit l1">Hello, suresh, please let me know price of this product</p>
                  <time>04 April, 2024   <span>03:26 PM</span></time>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/ChatDetails" className="link">
                <Image src={prImg1} alt="property" className="imgBox" />
                <Image src={profileImg} alt="property" className="userProfile" />

                <div className="contentBody">
                  <h3 className="textLimit l1">Jitendra Kumar Prajapat </h3> 
                  <p className="textLimit l1">Hello, suresh, please let me know price of this product</p>
                  <time>04 April, 2024   <span>03:26 PM</span></time>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/ChatDetails" className="link">
                <Image src={prImg1} alt="property" className="imgBox" />
                <Image src={profileImg} alt="property" className="userProfile" />

                <div className="contentBody">
                  <h3 className="textLimit l1">Jitendra Kumar Prajapat </h3> 
                  <p className="textLimit l1">Hello, suresh, please let me know price of this product</p>
                  <time>04 April, 2024   <span>03:26 PM</span></time>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/ChatDetails" className="link">
                <Image src={prImg1} alt="property" className="imgBox" />
                <Image src={profileImg} alt="property" className="userProfile" />

                <div className="contentBody">
                  <h3 className="textLimit l1">Jitendra Kumar Prajapat </h3> 
                  <p className="textLimit l1">Hello, suresh, please let me know price of this product</p>
                  <time>04 April, 2024   <span>03:26 PM</span></time>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/ChatDetails" className="link">
                <Image src={prImg1} alt="property" className="imgBox" />
                <Image src={profileImg} alt="property" className="userProfile" />

                <div className="contentBody">
                  <h3 className="textLimit l1">Jitendra Kumar Prajapat </h3> 
                  <p className="textLimit l1">Hello, suresh, please let me know price of this product</p>
                  <time>04 April, 2024   <span>03:26 PM</span></time>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/ChatDetails" className="link">
                <Image src={prImg1} alt="property" className="imgBox" />
                <Image src={profileImg} alt="property" className="userProfile" />

                <div className="contentBody">
                  <h3 className="textLimit l1">Jitendra Kumar Prajapat </h3> 
                  <p className="textLimit l1">Hello, suresh, please let me know price of this product</p>
                  <time>04 April, 2024   <span>03:26 PM</span></time>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/ChatDetails" className="link">
                <Image src={prImg1} alt="property" className="imgBox" />
                <Image src={profileImg} alt="property" className="userProfile" />

                <div className="contentBody">
                  <h3 className="textLimit l1">Jitendra Kumar Prajapat </h3> 
                  <p className="textLimit l1">Hello, suresh, please let me know price of this product</p>
                  <time>04 April, 2024   <span>03:26 PM</span></time>
                </div>
              </Link>
            </li>
          </ul>
      </div>
   </MultiContentLayout>
   
  );
};

export default Chat;