import React from "react";
import "./App.css";
import Header from "./components/Header";
import RegistrationForm from "./components/RegisterationForm";
import Login from "./components/LoginForm";
import NotFound from "./components/NotFound";
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
            <Route path="/signup" exact={true}>
              <RegistrationForm />
            </Route>
            <Route path="/login" exact={true}>
              <Login />
            </Route>
            <Route path="/not-found" exact component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
