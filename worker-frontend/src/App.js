import React, { Component } from "react";
import NavBar from "./components/navBar/navBar";
import { Switch, Route, Redirect } from "react-router-dom";

import MyApp from "./components/myApp";
import About from "./components/about";
import ContactUs from "./components/contactUs";
import NotFound from "./components/notFound";
import Login from "./components/login";
import Register from "./components/register";
import FooterBar from "./components/footer/footer";
import Person from "./components/body/centreBody/person";
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
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/person/:id" component={Person} />
            <Route path="*" component={NotFound} />
          </Switch>
          <FooterBar />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
