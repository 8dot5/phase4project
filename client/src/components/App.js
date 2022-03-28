import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Constellation from "./Constellation";
import Star from "./Star";



function App() {
  return (
    <>
      <Switch>
        <Route exact path="/constellation/:id">
          <Constellation />
        </Route>
        <Route exact path="/star/:id">
          <Star />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;