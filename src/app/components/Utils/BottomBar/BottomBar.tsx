import Link from "next/link";
import { GoHome, GoTasklist } from "react-icons/go";
import { LuPlus } from "react-icons/lu";
import { BsChatSquareText } from "react-icons/bs";
import { TbCategory2 } from "react-icons/tb";

const BottomBar = () => {
  return (
    <>
        <div className="bottomBar">
            <div className="col">
              <Link href="#" className="link homeTap">
                <span className="iconBox"><GoHome className="icon" /></span>
                <h6>Home</h6>
              </Link>
            </div>
            <div className="col">
              <Link href="#" className="link chatTab">
              <span className="iconBox"><BsChatSquareText className="icon" /></span>
                <h6>Chats</h6>
              </Link>
            </div>
            <div className="col">
              <Link href="#" className="link center sellTap">
                <span className="centerMenu"><LuPlus className="icon" /></span>
                <h6>Sell</h6>
              </Link>
            </div>
            <div className="col">
              <Link href="#" className="link listingTap">
              <span className="iconBox"><GoTasklist className="icon" /></span>
                <h6>Listing</h6>
              </Link>
            </div>
            <div className="col">
              <Link href="#" className="link categoryTap">
              <span className="iconBox"><TbCategory2 className="icon" /></span>
                <h6>Category</h6>
              </Link>
            </div>
        </div>  
    </>
  )
}

export default BottomBar