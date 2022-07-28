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
          <input type="text" id="userName" name="userName" onChange={(event) => setUser({...user, userName: event.target.value})} placeholder='Your Username'/>

          <label htmlFor='firstName'>First Name</label>
          <input type="text" id="firstName" name="firstName" onChange={(event) => setUser({...user, firstName: event.target.value})} placeholder='Your First Name'/>

          <label htmlFor='lastName'>Last Name</label>
          <input type="text" id="lastName" name="lastName" onChange={(event) => setUser({...user, lastName: event.target.value})} placeholder='Your Last Name'/>

          <label htmlFor='email'>Email</label>
          <input type="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" name="email" onChange={(event) => setUser({...user, email: event.target.value})} placeholder='Your Email'/>

          <label htmlFor='password'>Password</label>
          <input type="password" id="password" name="password" onChange={(event) => setUser({...user, password: event.target.value})} placeholder='Your Password'/>

          <label htmlFor='phone'>Phone Number</label>
          <input type="tel" id="phone" name="phone" onChange={(event) => setUser({...user, phone: event.target.value})} placeholder='Your Phone Number'/>

          <label htmlFor='userStatus'> Status</label>
          <input type="number" id="userStatus" name="userStatus" onChange={(event) => setUser({...user, userStatus: parseInt(event.target.value, 10)})} placeholder='Your Status'/>

          <button onClick={sendUser}>Register</button>
        </form>
    </div>
  )
}

export default UsersPage