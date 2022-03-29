import { React, useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from './Login';
import Constellation from "./Constellation";
import Star from "./Star";
import StarCreate from "./StarCreate";
import StarUpdate from './StarUpdate';



function App() {
	const [constellations, setConstellations] = useState([]);
  const [stars, setStars] = useState([]);
  // let { id } = useParams();

	useEffect(() => {
    fetch("http://localhost:3000/constellations")
    // fetch("https://constellation-lookup.herokuapp.com/constellations")
			.then((r) => r.json())
			.then((c) => setConstellations(c));
	}, []);

  // TODO review handleAddStar function..
  function handleAddStar(){
    fetch("http://localhost:3000/constellations/:id/stars") 
      .then((r) => r.json())
      .then((s) => setStars(s));
  }

  function handleUpdateStar() {
    fetch('http://localhost:3000/stars/$:id')
      .then((r) => r.json())
      .then((s) => setStars(s));
  }

  return (
    <>
    <Login />
      <Switch>
        <Route exact path="/constellations/:id/stars">
          <StarCreate constellations={constellations} handleAddStar={handleAddStar} />
        </Route>
        <Route path="/constellations/:id/stars/:id">
          <StarUpdate constellations={constellations} handleUpdateStar={handleUpdateStar} />
        </Route>
        <Route exact path="/constellations/:id">
          <Constellation constellations={constellations} />
        </Route>
        <Route exact path="/">
          <Home constellations={constellations} />
        </Route>
      </Switch>
    </>
  );
}

export default App;