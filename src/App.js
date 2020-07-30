import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:productId" component={SingleProduct} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
