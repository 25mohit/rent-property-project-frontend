import Link from "next/link"
import React from "react"
import { IoArrowBack } from "react-icons/io5";

interface UserFormProps{
  children: any,
  title: string
}

const UserForm:React.FC<UserFormProps> = ({ children, title }) => {
  return (
    <form method="post" className="p-4 onBoardingSection">
      <div className="topHead flex justify-between">
        {/* <button className="backBtn"><IoArrowBack /></button> */}
          <Link className="link" href="#">Skip {'>'}{'>'} </Link>
      </div>
      <h2 className="pageTitle">{title}</h2>
      {children}
    </form>
  )
}


export default UserForm