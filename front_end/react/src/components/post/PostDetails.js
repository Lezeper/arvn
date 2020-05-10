import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../../actions/post';
import { toRedirect } from '../../actions/common';
import { Post } from '../../models/Post';

class PostDetails extends Component {
  componentWillMount = () => {
    if(!this.props.currentUser) {
      this.props.toRedirect('/login');
    }
  }

  componentDidMount = () => {
    const { slug } = this.props.match.params;
    this.props.fetchPost(slug);
  }

  onDeleteClick = () => {
    const { slug } = this.props.match.params;
    this.props.deletePost(slug);
  }

  render = () => {

    let post = new Post(this.props.post);

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          Delete Post
        </button>
        {
          post ? 
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        : <p>Loading...</p>
        }
        
      </div>
    );
  }
}

const mapStateToProp = (state, ownProps) => {
  return {
    post: state.post.post,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProp, {fetchPost, toRedirect, deletePost})(PostDetails);