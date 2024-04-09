import React from "react"

interface UserFormProps{
  children: any,
  title: string
}

const UserForm:React.FC<UserFormProps> = ({ children, title }) => {
  return (
    <form method="post" className="main-user-form-container flex flex-col gap-4">
      <h2>{title}</h2>
      {children}
    </form>
  )
}

export default UserForm