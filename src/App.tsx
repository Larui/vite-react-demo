import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PCRoom from "./pc/Home";
import MRoom from "./m/Home";
import "./App.css";

export function isMobile(): boolean {
  const u = navigator.userAgent;
  return !!u.match(/AppleWebKit.*Mobile.*/);
}

function App() {
  const routes = [];
  if (isMobile()) {
    routes.push(<Route path="/m/home" component={MRoom} key="mliveroom" />);
    routes.push(<Redirect to="/m/home" key="redirect" />);
  } else {
    routes.push(<Route path="/home" component={PCRoom} key="liveroom" />);
    routes.push(<Redirect to="/home" key="redirect" />);
  }
  return (
    <Router>
      <Switch>{routes}</Switch>
    </Router>
  );
}

export default App;
