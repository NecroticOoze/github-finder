import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import Check from "bootstrap-icons/icons/check2.svg";
import X from "bootstrap-icons/icons/x-circle.svg";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUserRepos, repos, user, loading, getUser } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container my-3">
      <Link to="/" className="btn btn-secondary mb-3">
        Back to Search
      </Link>
      <div className="card col-md-8 mx-auto p-3">
        <div className="row">
          <div className="col-md-5 text-center">
            <img
              src={avatar_url}
              alt="Avatar"
              className="card-img-top rounded-circle mx-auto my-3"
              style={{ width: "150px" }}
            />
            <h3 className="card-title">{name}</h3>
            <p>{location}</p>
          </div>
          <div className="col-md-7 my-3">
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <ul>
              <li>
                <strong>Hireable: </strong>
                {hireable ? (
                  <img src={Check} alt="is_hireable" />
                ) : (
                  <img src={X} alt="is_not_hireable" />
                )}
              </li>
              {login && (
                <li>
                  <strong>Username: </strong>
                  {login}
                </li>
              )}
              {company && (
                <li>
                  <strong>Company: </strong>
                  {company}
                </li>
              )}
              {blog && (
                <li>
                  <strong>Website: </strong>
                  <a href={blog}>{blog}</a>
                </li>
              )}
            </ul>
            <a className="btn btn-dark" href={html_url}>
              Visit Github Profile
            </a>
          </div>
        </div>
      </div>
      <div className="card col-md-8 mx-auto my-3 text-center p-3">
        <p className="m-0">
          <span className="badge bg-primary mx-1">Followers: {followers}</span>
          <span className="badge bg-success mx-1">Following: {following}</span>
          <span className="badge bg-danger mx-1">
            Public Repos: {public_repos}
          </span>
          <span className="badge bg-dark mx-1">
            Public Gists: {public_gists}
          </span>
        </p>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
