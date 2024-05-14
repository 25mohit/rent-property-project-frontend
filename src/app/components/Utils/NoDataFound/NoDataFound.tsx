
import React from "react"
import Image from "next/image";
import ChatIcon from "../SvgIcons/ChatIcon";
import NotificationIcon from "../SvgIcons/NotificationIcon";

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
            <h4>{title}</h4>
        </div>
    </div>
      
  )
}

export default NoDataFound