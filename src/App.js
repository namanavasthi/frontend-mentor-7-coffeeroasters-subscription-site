import React from "react";

import { Home, About } from "./pages";

import { Wrapper } from "./Wrapper";
import { Header } from "./Header";
import { Footer } from "./Footer";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Router>
        {/* <Link to="/about">About</Link> */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Wrapper>
  );
};

export default App;
