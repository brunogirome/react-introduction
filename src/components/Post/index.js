import React from 'react';
import './styles.css';

import Comment from '../Comment';

function Post({ author, date, content, comments }) {
  return (
    <article>
      <header>
        <img src={author.avatar} alt="avatar" />
        <div className="name">
          <a href="">{author.name}</a>
          <span>{date}</span>
        </div>
      </header>
      <div className="content">{content}</div>

      {comments.length > 0 && <div className="divider" />}

      {comments.map(comment => (
        <Comment
          key={comment.id}
          author={comment.author}
          content={comment.content}
        />
      ))}
    </article>
  );
}

export default Post;
