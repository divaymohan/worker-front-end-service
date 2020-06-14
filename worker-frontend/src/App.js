import React, { Component } from "react";
import NavBar from "./components/navBar/navBar";
import { Switch, Route, Redirect } from "react-router-dom";

import MyApp from "./components/myApp";
import About from "./components/about";
import ContactUs from "./components/contactUs";
import NotFound from "./components/notFound";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="bg-white container-fluid">
          <NavBar />
          <Switch>
            <Route path="/" exact component={MyApp} />
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
