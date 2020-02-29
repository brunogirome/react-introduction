import React, { Component } from 'react';
import './styles.css';

import Post from '../Post';

class PostList extends Component {
  render() {
    return (
      <main>
        <Post />
        <Post />
        <Post />
      </main>
    );
  }
}

export default PostList;
