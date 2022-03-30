import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar({ setUser, setIsAuthenticated, user }) {
  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
        setIsAuthenticated(false)
        setUser(null)
    })
  }

  return (
    <nav>
      <span className="logo">{""}</span>
      <button onClick={logout}>Logout</button>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/star">Stars</NavLink>

    </nav>
  )
}

export default NavBar