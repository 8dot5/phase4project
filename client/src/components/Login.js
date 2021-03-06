import React, { useState } from 'react';
import Auth from './Auth';
import { Link } from "react-router-dom";
import styled from "styled-components";

function Login({setUser, setIsAuthenticated, history}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

	const [error, setError] = useState([])
    function handleSubmit(e) {
        e.preventDefault();
        console.log(username, 'this is name')
        console.log(password, 'this is password')

		const user = { username: username, password }

		{/* Controlled form input validation! */}
		fetch("/create", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(user)
		}).then((r) => {
			if (r.ok) {
			  r.json()
			  .then((user) => {
				  setUser(user)
				  setIsAuthenticated(true)
				  history.push('/')
				});
			}
		});
    }

	return (
		<Wrapper>
			<H1>Log in or create an account</H1>
			<form onSubmit={handleSubmit}>
				<Label>
				Username &nbsp;
				<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
				</Label>
				<Label>
				Password &nbsp;
				<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				</Label>
				<input type="submit" value="Login!" />
		  	</form>

			<Divider />
				<P>
					Don't have an account? &nbsp;
					<SignupButton as={Link} to="/signup">Sign Up</SignupButton>
				</P>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  min-height: 60vh;
  background-color:black;
  opacity:80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`;

const H1 = styled.h1`
color:white;
`;

const P = styled.p`
color:white;
`;

const Label = styled.label`
color:white;
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

const SignupButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  background: Green;
  color: white
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;