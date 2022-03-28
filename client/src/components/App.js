import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Constellations from "./Constellations";
import Stars from "./Stars";



function App() {
  return (
    <>
      <Switch>
        <Route exact path="/constellations/:id">
          <Constellations />
        </Route>
        <Route exact path="/stars/:id">
          <Stars />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;