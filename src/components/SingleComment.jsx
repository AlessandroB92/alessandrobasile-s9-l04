import React from 'react';

const SingleComment = ({ comment }) => {
  return (
    <div>
      <p>{comment.text}</p>
      <p>By: {comment.author}</p>
    </div>
  );
};

export default SingleComment;