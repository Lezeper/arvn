import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './style/style.css';
import PostIndex from './components/post/PostIndex';
import PostDetail from './components/post/PostDetails';
import PostNew from './components/post/PostNew';
import Auth from './components/auth/Auth';
import Header from './components/shared/Header';

import { getCurrentUser } from './actions/auth';

class App extends Component {
  componentWillMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="container">
        {
          this.props.appLoad ?
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={PostIndex} />
              <Route path="/posts/new" component={PostNew} />
              <Route path="/posts/:slug" component={PostDetail} />
              <Route path="/login" render={()=><Auth type="Login"/>}/>
              <Route path="/register" render={()=><Auth type="Register"/>}/>
            </Switch>
          </div>
          : <p>Loading...</p>
        }
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {...state.common};
}

export default connect(mapStateToProp, { getCurrentUser })(App);