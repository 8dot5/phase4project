import React, {useState} from 'react'
import styled from "styled-components";

function Auth({ setUser, setIsAuthenticated, history }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            password
        }

        fetch("/users",{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => {
          setUser(json)
				  setIsAuthenticated(true)
				  history.push('/')
        })
    }

    return (
      <Wrapper>
          <H1>Sign up</H1>
          <form onSubmit={onSubmit}>
          <Label>
            Username
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Label>
          <Label>
            Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Label>
          <input type="submit" value="Sign up!" />
        </form>
        {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
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
  padding: 0px;
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

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Auth;
