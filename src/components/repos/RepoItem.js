import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className="card col-md-8 mx-auto my-3 p-3">
      <h5>
        <a className="link-primary" href={repo.html_url}>
          {repo.name}
        </a>
      </h5>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
