import React from "react";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/RegisterationForm";
import Login from "./components/LoginForm";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route path="/signup" exact={true}>
              <Register />
              <span>&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;</span>
            </Route>
            <Route path="/login" exact={true}>
              <Login />
            </Route>

            <Route path="/home" exact={true}>
              <Home />
            </Route>

            <Route path="/not-found" exact component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
