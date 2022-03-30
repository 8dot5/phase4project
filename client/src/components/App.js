import { React, useEffect, useState } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from './Login';
import Constellation from "./Constellation";
import StarCreate from "./StarCreate";
import StarUpdate from './StarUpdate';



function App() {
	const [constellations, setConstellations] = useState([]);

	useEffect(() => {
    fetch("http://localhost:3000/constellations")
    // fetch("https://constellation-lookup.herokuapp.com/constellations")
			.then((r) => r.json())
			.then((c) => setConstellations(c));
	}, []);

  function handleAddUpdateStar(star){
    console.log(star)
    const updatedList = [star, ...constellations]
    setConstellations(updatedList)
  }

  return (
    <>
    <Login />
      <Switch>
        <Route exact path="/constellations/:id/stars">
          <StarCreate constellations={constellations} handleAddUpdateStar={handleAddUpdateStar} />
        </Route>
        <Route exact path="/constellations/:id/stars/:id">
          <StarUpdate constellations={constellations} handleAddUpdateStar={handleAddUpdateStar} />
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