import React from "react"

interface UserFormProps{
  children: any,
  title: string
}

const UserForm:React.FC<UserFormProps> = ({ children, title }) => {
  return (
    <form method="post" className="onBoardingSection">
      <h2 className="pageTitle">{title}</h2>
      {children}
    </form>
  )
}

export default UserForm