import { React, useEffect, useState } from 'react';
import { Switch, Route, Link } from "react-router-dom";
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

  useEffect(() => {
    fetch("http://localhost:3000/authorized_user")
    .then((res) => {
      if(res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        })
        .then(()=> {
          fetch("http://localhost:3000/constellations")
          .then(res => res.json())
          .then(c => setConstellations(c))
          });
        }
      })
  },[]);


	useEffect(() => {
    fetch("http://localhost:3000/constellations")
    // fetch("https://constellation-lookup.herokuapp.com/constellations")
			.then((r) => r.json())
			.then((c) => setConstellations(c));
	}, []);

  function handleStarUpdate(star){
    let constellation = constellations.find(constellation => constellation.id == star.constellation.id)
    constellation.stars = [star, ...constellation.stars]
  }

  // if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  if (!isAuthenticated) return <Auth />;


  return (
    <>
    <NavBar setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />
      <Switch>
        <Route exact path="/constellations/:id/stars">
          <StarCreate constellations={constellations} />
        </Route>
        <Route exact path="/constellations/:id/stars/:star_id">
          <StarUpdate constellations={constellations} handleStarUpdate={handleStarUpdate} />
        </Route>
        <Route exact path="/constellations/:id">
          <Constellation constellations={constellations} />
        </Route>
        <Route exact path="/">
          <Home constellations={constellations} />
        </Route>
        <Route path="/sign_up">
          <Auth />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
          <Link to="/">Go home</Link>
        </Route>
      </Switch>
    </>
  );
}

export default App;