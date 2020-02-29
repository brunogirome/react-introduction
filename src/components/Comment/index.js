import React from 'react';
import './styles.css';

function Comment({author, content}) {
  return (
    <div className="comment-container">
      <img src={author.avatar} alt="avatar" />
      <div className="comment">
        <span>{author.name}</span> {content}
      </div>
    </div>
  );
}

export default Comment;
