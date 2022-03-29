import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username, 'this is name')
        console.log(password, 'this is password')

		const formData = { username, password}

		{/* Controlled form input validation! */}
		fetch("http://localhost:3000/login", {
		// fetch("https://constellation-lookup.herokuapp.com/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(formData)
		}).then((r) => {
			if (r.ok) {
			  r.json().then((user) => setUsername(user));
			}
		});
    }

    let form = (
		<div className="form-container">
			<form className="form" onSubmit={handleSubmit}  >
				<label htmlFor='Form'>Login!</label>
				<input
					className="username"
					type='text'
					id='username'
					value={username}
					placeholder="Your username..."
					onChange={e => setUsername(e.target.value)}
				/>
				<input
					className="password"
					type='text'
					id='password'
					value={password}
					placeholder="Your password"
					onChange={e => setPassword(e.target.value)}
				/>

				<button className="card_button" type="submit">Submit</button>

			</form>

		</div>

	)
    return (
        <div className="login">
            {form}
        </div>
    )
}

export default Login;