import Link from "next/link";
import { GoComment, GoHeart, GoHome, GoTasklist } from "react-icons/go";
import { LuPlus } from "react-icons/lu";
import { BsChatSquareText } from "react-icons/bs";

const BottomBar = () => {
  return (

    <div className="bottomBar">
      <div className="col">
        <Link href="/" className="link homeTap active">
          <div className="block">
            <span className="iconBox"><GoHome className="icon" /></span>
            <h6>Home</h6>
          </div>
        </Link>
      </div>
      <div className="col">
        <Link href="/Whishlist" className="link categoryTap">
          <div className="block">
            <span className="iconBox"><GoHeart className="icon" /></span>
            <h6>Wishlist</h6>
          </div>
        </Link>
      </div>
      <div className="col">
        <Link href="/AddItem" className="link center sellTap active">
          <div className="block">
            <span className="centerMenu"><LuPlus className="icon" /></span>
            <h6>Sell</h6>
          </div>
        </Link>
      </div>
      <div className="col">
        <Link href="/Listing" className="link listingTap">
          <div className="block">
            <span className="iconBox"><GoTasklist className="icon" /></span>
            <h6>Listing</h6>
          </div>
        </Link>
      </div>
      <div className="col">
        <Link href="/Chat" className="link chatTab">
          <div className="block">
            <span className="iconBox"><GoComment className="icon" /></span>
            <h6>Chats</h6>
          </div>
        </Link>
      </div>
    </div>

  )
}

export default BottomBar