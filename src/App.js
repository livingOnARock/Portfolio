import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import RecentWork from "./components/RecentWork";
import Contact from "./components/Contact";
import Navbar from "./components/AppNavbar";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar style={{ position: "fixed" }} />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/recentWork" component={RecentWork} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
