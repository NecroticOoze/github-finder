import React from "react";
import UserItem from "./UserItem";
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
};

Users.propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired
}

export default Users;
