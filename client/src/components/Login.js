import React, { useState } from 'react';
import Auth from './Auth';
import { useHistory } from "react-router-dom";
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
		fetch("/login", {
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
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
			<label>
			  Username
			  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
			</label>
			<label>
			  Password
			<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			</label>

			<input type="submit" value="Login!" />
		  </form>
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

export default Login;