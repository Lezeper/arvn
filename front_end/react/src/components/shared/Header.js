import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../actions/auth';

class Header extends React.Component {
  logout = () => {
    this.props.logout();
  }

  render() {
    return (
      <div>
        {
          this.props.currentUser ? 
          <div>
            <p>Welcome: {this.props.currentUser.username}</p>
            <button className="btn btn-defualt" onClick={this.logout}>Logout</button>
          </div>
          :
          <div>
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    currentUser: state.auth.currentUser
  };
}

export default connect(mapStateToProp, { logout })(Header);