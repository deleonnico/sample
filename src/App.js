import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import MainPage from "./components/MainPage/MainPage";
import WhyUCC from "./components/Pages/WhyUCC/WhyUCC";
import Products from "./components/Pages/Products/Products";
import Pricing from "./components/Pages/Pricing/Pricing";
import Account from "./components/Pages/Account/Account";
import Welcome from "./components/Pages/Welcome/Welcome";
import Dashboard from "./components/Pages/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <NavigationBar />

          <BrowserRouter>
            <Switch>
              <Route path="/" exact    component={ MainPage } />
              <Route path="/WhyUCC"    component={ WhyUCC } />
              <Route path="/Products"  component={ Products } />
              <Route path="/Pricing"   component={ Pricing } />
              <Route path="/Account"   component={ Account } />
              <Route path="/Welcome"   component={ Welcome } />
              <Route path="/Dashboard" component={ Dashboard } />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
