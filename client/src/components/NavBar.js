import React from 'react'
import { NavLink } from 'react-router-dom'
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
  // return (e
  //   <nav>
  //     <button exact to="/">Login</button>
  //     <button onClick={logout}>Logout</button>
  //     <button exact to="/signup">Signup</button>
  //   </nav>
  // )


  return (
    <Header>
      <nav className="navBar">
      <h1>Constellation Lookup</h1>
      {/* <Logo>Constellation Lookup</Logo> */}
      <ButtonBase exact to="/">Home</ButtonBase>

      <ButtonBase exact to="/login">Login</ButtonBase>
      <ButtonBase onClick={logout}>Logout</ButtonBase>
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
  /* grid-column-gap: 20px; */
  /* grid-auto-flow: column; */
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

const Nav = styled.nav`
  font-family: "Trebuchet MS";
  font-size: 2rem;
  color: LightSkyBlue;
  display: block;
  gap: 4px;
  position: absolute;
  right: 8px;
  padding-top: 30px;

`;

export default NavBar