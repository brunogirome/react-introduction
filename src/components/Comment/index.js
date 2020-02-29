import React from 'react';
import './styles.css';

import avatar from '../../../assets/man.png';

function Comment() {
  return (
    <div className="comment-container">
      <img src={avatar} alt="avatar" />
      <div className="comment">
        <span>Lucas Silva</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eos rem
        modi eveniet assumenda laudantium ducimus totam quasi, voluptatem amet,
        debitis blanditiis sunt ad cupiditate impedit quia in quidem est!
      </div>
    </div>
  );
}

export default Comment;
