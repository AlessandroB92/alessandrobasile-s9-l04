import React, { useState } from 'react';

const AddComment = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className='d-flex flex-column align-items-center'>
      <textarea className='w-100 rounded'
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <button className='addComment' onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default AddComment;