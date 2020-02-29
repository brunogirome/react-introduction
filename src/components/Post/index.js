import React, { Component } from 'react';

import './styles.css';
import avatar from '../../../assets/woman.png';

class Post extends Component {
  render() {
    return (
      <article>
        <header>
          <img src={avatar} alt="avatar" />
          <div className="name">
            <a href="">Ana Júlia</a>
            <span>November 01, 2005</span>
          </div>
        </header>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quia
          illo aut optio quae maxime quisquam laboriosam voluptates distinctio
          recusandae, deserunt hic omnis inventore animi dolor sunt quam maiores
          laborum.
        </div>
      </article>
    );
  }
}

export default Post;
