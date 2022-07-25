import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
    <div>
        <NavLink to='/pets'>Pets</NavLink>
    </div>
    <div> 
        <NavLink to='/orders'>Orders</NavLink>
    </div>
    </nav>
  )
}

export default Navigation