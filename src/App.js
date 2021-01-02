import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import User from "./components/users/User";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";

const App = () => {
  const [alert, setAlert] = useState(null);

  //  Creates an alert and resets the alert after 5 seconds
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <Fragment>
          <Navbar />
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <div className="container my-3">
                    <Search setAlert={showAlert} />
                  </div>
                  <Users />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" component={User} />
          </Switch>
        </Fragment>
      </Router>
    </GithubState>
  );
};

export default App;
