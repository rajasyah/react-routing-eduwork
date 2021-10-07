import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default Routes;
