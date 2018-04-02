import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../../actions/post';

class PostIndex extends React.Component {
  componentWillMount = () => {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.slug}>
          <Link to={`/posts/${post.slug}`}>
            {post.title}
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {...state.post};
}

export default connect(mapStateToProp, {fetchPosts})(PostIndex);
