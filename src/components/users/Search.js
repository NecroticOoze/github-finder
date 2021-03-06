import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);

  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "secondary");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="container my-3">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-10 ">
            <input
              type="text"
              name="text"
              placeholder="Search Users..."
              className="form-control"
              value={text}
              onChange={onChange}
            />
          </div>
          <div className="col-md-2 mt-3 mt-md-0">
            <button type="search" className="btn btn-dark bg-gradient w-100">
              Search
            </button>
          </div>
        </div>
      </form>
      {githubContext.users.length > 0 && (
        <div className="d-grid gap-2 my-3">
          <button
            className="btn btn-secondary bg-gradient"
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
