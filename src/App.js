import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import User from "./components/users/User";
import About from "./components/pages/About";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  //  Searches for users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(res.data.items);
    this.setState({ users: res.data.items, loading: false });
  };

  //  Get single Github User
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  //  Get user repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data);
    this.setState({ repos: res.data, loading: false });
  };

  //  Clears state/page
  clearUsers = () => this.setState({ users: [], loading: false });

  //  Creates an alert and resets the alert after 5 seconds
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    const { users, loading, user, repos } = this.state;

    return (
      <Router>
        <Fragment>
          <Navbar />
          <Alert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <div className="container my-3">
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                  </div>
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  user={user}
                  loading={loading}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
