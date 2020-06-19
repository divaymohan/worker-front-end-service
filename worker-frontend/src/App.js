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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwtDecode from "jwt-decode";
import Logout from "./components/common/logout";
import Profile from "./components/profile";
toast.configure();
class App extends Component {
  state = { user: "" };
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      console.log(user);
      this.setState({ user });
    } catch (ex) {}
  }
  render() {
    return (
      <React.Fragment>
        <main className="bg-white container-fluid">
          <NavBar User={this.state.user} />
          <Switch>
            <Route path="/" exact component={MyApp} />
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/profile" component={Profile} />
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
