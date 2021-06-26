import React from "react";
import Home from "./home/Home";
import HorrorSound from "./horrorSound/HorrorSound";
import HorrorStory from "./horrorStory/HorrorStory";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/HorrorSound" component={HorrorSound} />
        <Route exact path="/HorrorStory" component={HorrorStory} />
      </Switch>
    </Router>
  );
}

export default App;
