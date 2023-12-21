import React from 'react';
import SingleComment from './SingleComment';

const CommentsList = ({ comments }) => {
  return (
    <div>
      <h4>Comments:</h4>
      {comments.map((comment, index) => (
        <SingleComment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;