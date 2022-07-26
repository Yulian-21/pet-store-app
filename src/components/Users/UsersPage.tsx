import React, {FC, useState} from 'react'
import axios from 'axios';
import IUser from './UserType/UserType';
import { promisify } from '../Api/UserResponse';
import './UserPage.module.css'

const UsersPage = () => {

    const [user, setUser] = useState<IUser>(  { 
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        userStatus: 0});

        

        const changeUserNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            setUser({...user, userName: e.target.value});
        }

        const changeFirstNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            setUser({...user, firstName: e.target.value});
        }

        const changeLastNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            setUser({...user, lastName: e.target.value});
        }

        const changeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            setUser({...user, email: e.target.value});
        }

        const changePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            setUser({...user, password: e.target.value});
        }

        const changePhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            setUser({...user, phone: e.target.value});
        }

        const changeStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            setUser({...user, userStatus: parseInt(e.target.value, 10)});
        }


    const sendUser = async () => {
          await  axios.post<IUser>("https://petstore3.swagger.io/api/v3/user", user
          ).then(response => {
            alert(response.data)
          }).catch(err => { alert(err.message)})
    }
  return (
    <div>
        <form>
          <label htmlFor='userName'>Login</label>
          <input type="text" id="userName" name="userName" onChange={changeUserNameHandler} placeholder='Your Username'/>

          <label htmlFor='firstName'>First Name</label>
          <input type="text" id="firstName" name="firstName" onChange={changeFirstNameHandler} placeholder='Your First Name'/>

          <label htmlFor='lastName'>Last Name</label>
          <input type="text" id="lastName" name="lastName" onChange={changeLastNameHandler} placeholder='Your Last Name'/>

          <label htmlFor='email'>Email</label>
          <input type="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" name="email" onChange={changeEmailHandler} placeholder='Your Email'/>

          <label htmlFor='password'>Password</label>
          <input type="password" id="password" name="password" onChange={changePasswordHandler} placeholder='Your Password'/>

          <label htmlFor='phone'>Phone Number</label>
          <input type="tel" id="phone" name="phone" onChange={changePhoneHandler} placeholder='Your Phone Number'/>

          <label htmlFor='userStatus'> Status</label>
          <input type="number" id="userStatus" name="userStatus" onChange={changeStatusHandler} placeholder='Your Status'/>

          <button onClick={sendUser}>Submit</button>
        </form>
    </div>
  )
}

export default UsersPage