
import Image from "next/image";
import { prImg1 } from "../../../../../public/images";
import { MdMoreHoriz } from "react-icons/md";

const MyAds = () => {
  return (

    <div className="myAdsCard">
      <div className="myAdsCardHead">
        <h3>22-04-2024 <span className="time">9:43 PM</span></h3>
        <div className="dropdownMenu">
          <MdMoreHoriz className="icon" />
          <div className="dropdownBody">
            <ul>
              <li><button>Edit</button></li>
              <li><button>Delete</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="myAdsCardIn">
        <figure className="productCardImg">
          <Image src={prImg1} alt="pr1" />
        </figure>
        <div className="productCardBoy">
          <h3 className="itemPrice textLimit l1">Toyota Etios Liva G SP*, 2011, CNG & Hybrids</h3>
          <h4 className="distance"><b>₹ 2,25,000</b></h4>
          <h5 className="prdTitle textLimit l1"></h5>
          <p className="counts">
            <span>Views : 12</span>
            <span>Like : 08</span>
          </p>
        </div>

      </div>

      <div className="productCardBottom">
        <p>Status : <span className="text-danger">Pending</span></p>
      </div>
    </div>

  )
}

export default MyAds