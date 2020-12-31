import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserItem = ({user: {login, avatar_url, html_url}}) => {
    return (
        <div className="col-md-4 my-1">
            <div className="card text-center p-3">
                <img src={avatar_url} alt="mojombo" className="card-img-top rounded-circle mx-auto mt-1" style={{width:"75px"}}/>
                <div className="card-body">
                    <p className="lead">{login}</p>
                    <Link className="btn btn-lg btn-outline-dark bg-gradient" to={`/user/${login}`}>More</Link>
                </div>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
