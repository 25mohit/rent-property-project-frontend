
import Image from "next/image";
import { prImg1 } from "../../../../../public/images";

const MyAds = () => {
  return (
    <>
      <div className="myAdsCard">
        <div className="myAdsCardIn">
          <figure className="productCardImg">
            <Image src={prImg1} alt="pr1" />
          </figure>
          <div className="productCardBoy">
            <h3 className="itemPrice textLimit l1">Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h3>
            <h4 className="distance">₹ 2,25,000</h4>
            <h5 className="prdTitle textLimit l1"></h5>
            <p className="location textLimit l1">Airport Road, Ahmedabad</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyAds