import UserForm from '../components/HOC/UserForm/UserForm'

const UserAuth = () => {
  return (
    <UserForm title="User Login">
        <input type="text" placeholder='Enter Email'/>
        <input type="password" placeholder='Enter Password'/>
        <button>Submit</button>
    </UserForm>
  )
}

export default UserAuth