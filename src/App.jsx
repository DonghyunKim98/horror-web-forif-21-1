import React from "react";
import Home from "./home/Home";
import HorrorSound from "./horrorSound/HorrorSound";
import HorrorStory from "./horrorStory/HorrorStory";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";


const App=()=>{
  return(
    <Home/>
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/HorrorSound">
          <HorrorSound />
        </Route>
        <Route exact path="HorrorStory">
          <HorrorStory />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
