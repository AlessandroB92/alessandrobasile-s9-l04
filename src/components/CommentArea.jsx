import React, { useState, useEffect } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';

const CommentArea = ({ selectedBook }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // fetch del commento del selected book
    // fetch in base all'id del selected book
    // aggiorna con setComments
  }, [selectedBook]);

  const handleAddComment = (newComment) => {
    // aggiungi un nuovo commento 
    setComments([...comments, { text: newComment, author: 'User' }]);
  };

  return (
    <div>
      {selectedBook && (
        <>
          <CommentsList comments={comments} />
          <AddComment onAddComment={handleAddComment} />
        </>
      )}
    </div>
  );
};

export default CommentArea;