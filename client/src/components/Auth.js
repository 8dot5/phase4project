import React, {useState} from 'react'

function Auth({ setUser, setIsAuthenticated }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            password
        }

        fetch("http://localhost:3000/users",{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.errors) setErrors(Object.entries(json.errors))
        })
        // .then(fetch("http://localhost:3000/login"),{
        //   method:'POST',
        //   headers:{'Content-Type': 'application/json'},
        //   body:JSON.stringify(user)
        // })
        // .then(res => {
        //   if(res.ok){
        //     res.json()
        //     .then(user=>{
        //       setUser(user)
        //       setIsAuthenticated(true)
        //     })
        //   } else {
        //     res.json()
        //     .then(json => setErrors(json.error))
        //   }
        // })
    }
    return (
        <>
        <h1>Sign UP</h1>
        <form onSubmit={onSubmit}>
        <label>
          Username

          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
         Password

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <input type="submit" value="Sign up!" />
      </form>
      {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </>
    )
}

export default Auth;
