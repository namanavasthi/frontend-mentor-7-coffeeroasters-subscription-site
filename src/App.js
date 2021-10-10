import React from "react";

import { Home, About } from "./pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/frontend-mentor-7-coffeeroasters-subscription-site/about">
          <About />
        </Route>
        <Route path="/frontend-mentor-7-coffeeroasters-subscription-site/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
