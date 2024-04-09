import React from "react"

interface UserFormProps{
  children: any
}
const UserForm:React.FC<UserFormProps> = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

export default UserForm