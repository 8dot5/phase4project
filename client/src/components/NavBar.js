import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <span className="logo">{""}</span>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/constellation">Orders</NavLink>
      <NavLink to="/star">Stars</NavLink>
    </nav>
  )
}

export default NavBar