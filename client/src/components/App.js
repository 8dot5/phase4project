import { React, useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from './Login';
import Constellation from "./Constellation";
import Star from "./Star";
import CrudStar from "./CrudStar";



function App() {
	const [constellations, setConstellations] = useState([]);
  // let { id } = useParams();

	useEffect(() => {
    fetch("http://localhost:3000/constellations")
    // fetch("https://constellation-lookup.herokuapp.com/constellations")
			.then((r) => r.json())
			.then((c) => setConstellations(c));
	}, []);

  return (
    <>
    <Login />
      <Switch>
        <Route exact path="/constellations/:id/stars/:id">
          <Star />
        </Route>
        <Route path="/constellations/:id/stars">
          <CrudStar constellations={constellations}/>
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