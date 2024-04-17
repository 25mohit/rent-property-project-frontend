import Link from "next/link"
import React from "react"
import { IoArrowBack } from "react-icons/io5";
import SingleContentLayout from "../Layout/SingleContentLayout";

interface UserFormProps{
  children: any,
  title: string
}

const UserForm:React.FC<UserFormProps> = ({ children, title }) => {
  return (
    <SingleContentLayout>
      <form method="post" className="p-4 onBoardingSection">
        {children}
      </form>
    </SingleContentLayout>
    
  )
}


export default UserForm