import { React, useEffect, useState } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from './Login';
import Constellation from "./Constellation";
import StarCreate from "./StarCreate";
import StarUpdate from './StarUpdate';
import NavBar from './NavBar';


function App() {
	const [constellations, setConstellations] = useState([]);

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

  return (
    <>
    <Login />
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
        <Route path="*">
          <h1>404 not found</h1>
          <Link to="/">Go home</Link>
        </Route>
      </Switch>
    </>
  );
}

export default App;