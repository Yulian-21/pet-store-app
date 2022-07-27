import React from 'react'
import { NavLink } from 'react-router-dom'
import n from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={n.nav}>
    <div className={`${n.fontStyle}`} >
        <NavLink className={navData => navData.isActive ? n.active : n.fontStyle} to='/pets'>Pets</NavLink>
    </div>
    <div className={`${n.fontStyle}`} > 
        <NavLink className={navData => navData.isActive ? n.active : n.fontStyle} to='/orders'>Orders</NavLink>
    </div>
    <div className={`${n.fontStyle}`} >
      <NavLink className={navData => navData.isActive ? n.active : n.fontStyle} to='/users'>Users</NavLink>
    </div>
    <div className={`${n.fontStyle}`}>
      <NavLink className={navData => navData.isActive ? n.active : n.fontStyle} to='/about'>About</NavLink>
    </div>
    </nav>
  )
}

export default Navigation