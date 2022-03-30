import { React, useEffect, useState } from 'react';
import { Switch, Route, Link } from "react-router-dom";
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

  function handleAddStar(newStar){
    console.log(newStar)
    const updatedList = [newStar, ...constellations]
    setConstellations(updatedList)
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
        <Route exact path="/constellations/:id/stars/:id">
          <StarUpdate constellations={constellations} handleUpdateStar={handleUpdateStar} />
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