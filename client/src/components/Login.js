import React, { useState } from 'react';
import Auth from './Auth';
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";

function Login({setUser, setIsAuthenticated}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

	const [error, setError] = useState([])
    let history = useHistory();

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
				  console.log("!!!!", user)
				  history.push('/')
				});
			}
		});
    }

	return (
		<Wrapper>
			<h1>Log in or create an account</h1>
			<form onSubmit={handleSubmit}>
				<label>
				Username &nbsp;
				<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
				</label>
				<label>
				Password &nbsp;
				<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				</label>
				<input type="submit" value="Login!" />
		  	</form>

			<Divider />
				<p>
					Don't have an account? &nbsp;
					<SignupButton as={Link} to="/signup">Sign Up</SignupButton>
				</p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 8px;
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