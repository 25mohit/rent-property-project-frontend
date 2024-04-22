import React from "react"
import SingleContentLayout from "../Layout/SingleContentLayout";

interface UserFormProps{
  children: any,
  title: string
}

const UserForm:React.FC<UserFormProps> = ({ children, title }) => {
  return (
    <SingleContentLayout>
      <form method="post" className="onBoardingSection">
        {children}
      </form>
    </SingleContentLayout>
    
  )
}


export default UserForm