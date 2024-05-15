
import React from "react"
import Image from "next/image";
import ChatIcon from "../SvgIcons/ChatIcon";
import NotificationIcon from "../SvgIcons/NotificationIcon";
import WishlistIcon from "../SvgIcons/WishlistIcon";
import ListingIcon from "../SvgIcons/ListingIcon";

interface NoDataFoundProps{
    type?: string,
    title: string
  }

const NoDataFound:React.FC<NoDataFoundProps> = ({  title, type }) => {
  return (

    <div className="noDataFound">
        <div className="noDataFoundBody">
            { type === "chat" && <ChatIcon />}
            { type === "notification" && <NotificationIcon />}
            { type === "wishlist" && <WishlistIcon />}
            { type === "listing" && <ListingIcon />}
            <h4>{title}</h4>
        </div>
    </div>
      
  )
}

export default NoDataFound