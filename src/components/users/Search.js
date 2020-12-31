import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "secondary");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-10 ">
              <input
                type="text"
                name="text"
                placeholder="Search Users..."
                className="form-control"
                value={this.state.text}
                onChange={this.onChange}
              />
            </div>
            <div className="col-md-2 mt-3 mt-md-0">
              <button type="search" className="btn btn-dark bg-gradient w-100">
                Search
              </button>
            </div>
          </div>
        </form>
        {showClear && (
          <div className="d-grid gap-2 my-3">
            <button
              className="btn btn-secondary bg-gradient"
              onClick={clearUsers}
            >
              Clear
            </button>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Search;
