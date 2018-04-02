import React from 'react';
import { connect } from 'react-redux';

import ErrorList from '../shared/ErrorList';
import { login, register } from '../../actions/auth';
import { toRedirect } from '../../actions/common';
import { getToken } from '../../utils';

class Auth extends React.Component {

  state = {
    username: '',
    email: '',
    password: ''
  }

  componentWillMount() {
    if(getToken()) {
      this.props.toRedirect();
    }
  }
  
  onSubmit = () => env => {
    env.preventDefault();
    
    if(this.props.type === 'Login') {
      this.props.login(this.state);
    } else {
      this.props.register(this.state)
    }
  }

  render() {
    return (
      <div>
        {
          this.props.errors ? <ErrorList errors={this.props.errors}/> : null
        }
        
        <form onSubmit={this.onSubmit()}>
          {
            (this.props.type === 'Login') ? null :
            <fieldset>
              <input 
                className="form-controller"
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={(env) => this.setState({username: env.target.value})}/>
            </fieldset>
          }

            <fieldset>
              <input 
                className="form-controller"
                type="email"
                placeholder="email"
                value={this.state.email}
                onChange={(env) => this.setState({email: env.target.value})}/>
            </fieldset>

            <fieldset>
              <input 
                className="form-controller"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={(env) => this.setState({password: env.target.value})}/>
            </fieldset>

          <button className="btn btn-primary">{this.props.type}</button>
        </form>  
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return state.auth;
}

export default connect(mapStateToProp, {login, register, toRedirect})(Auth);