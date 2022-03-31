import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

// import Login from "./Login";

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
    <Header>
      <nav className="navBar">
        <h1>Constellation Lookup</h1>
        {/* <Logo>Constellation Lookup</Logo> */}
        <ButtonBase as={Link} to="/">Home</ButtonBase>
        {user ? <ButtonBase as={Link} to="/login" onClick={logout}>Logout</ButtonBase> : <ButtonBase as={Link} to="/login">Login</ButtonBase>}
        {/* The /signup route is visible on the /login page. Uncommenting the following line will display the Signup button in the Nav area */}
        {/* <ButtonBase as={Link} to="/signup">Sign Up</ButtonBase> */}
    </nav>
    </Header>
  )
}

const Header = styled.header`
  justify-content: center;
  text-align: center;
  padding: 8px;
  padding-top: 30px;
  padding-bottom: 30px;
  background: black;
  font-size: 1.3em;
  color: white;
  display: grid;
`;

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  background: LightSkyBlue;
  color: white
`;

export default NavBar