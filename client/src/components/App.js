import { React, useEffect, useState } from 'react';
import { Switch, Route, Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import Home from "./Home";
import Constellation from "./Constellation";
import StarCreate from "./StarCreate";
import StarUpdate from './StarUpdate';
import NavBar from './NavBar';

import Login from './Login';
import Auth from "./Auth";


function App() {
	const [constellations, setConstellations] = useState([]);
  const [errors, setErrors] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  let history = useHistory();

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if(res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
          console.log("logged in as ", user)
        })
        }
        else
          console.log(res)
      })
  },[]);


	useEffect(() => {
		if (user && constellations.length === 0){
			fetch("/constellations")
				.then((r) => r.json())
				.then((c) => setConstellations(c));}
	}, []);

  function handleStarUpdate(star){
    if (constellations.length > 0) {
    let constellation = (constellations || []).find(constellation => constellation.id == star.constellation.id)
    console.log(constellation)
    console.log(constellations)
    constellation.stars = [star, ...constellation.stars]}
  }



  return (
    <>

    <NavBar setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />
    {/* <Login setIsAuthenticated={setIsAuthenticated} setUser={setUser}/> */}
      <main>
      <Switch>
        <Route exact path="/constellations/:id/stars">
          <StarCreate constellations={constellations} />
        </Route>
        <Route exact path="/constellations/:id/stars/:star_id">
        <StarUpdate constellations={constellations} handleStarUpdate={handleStarUpdate} history={history} />
        </Route>
        <Route exact path="/constellations/:id">
          <Constellation constellations={constellations} />
        </Route>
        <Route exact path="/">
          <Home constellations={constellations} setConstellations={setConstellations} user={user} />
        </Route>
        <Route path="/signup">
          <Auth setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route path="/login">
          <Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} history={history} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
          <Link to="/">Go home</Link>
        </Route>
      </Switch>
      </main>

    </>
  );
}



const Wrapper = styled.div`
  background-position: center;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 8px; */
  background-color: yellow;
`;



export default App;