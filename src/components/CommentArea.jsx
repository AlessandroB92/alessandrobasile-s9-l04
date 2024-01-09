import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Error from './Error';

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      const apiKey =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZmVhNmZlMDMxZTAwMTliYTE0ZjUiLCJpYXQiOjE3MDQ3MTkwNTgsImV4cCI6MTcwNTkyODY1OH0.430xQtiv-Y5uDqKorng6e9137CSJXxwMV81zztiK5Pw';

      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${props.asin}`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const commentsData = await response.json();
        setComments(commentsData);
        setIsError(false);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setIsError(true);
      }
    };

    if (props.asin) {
      fetchComments();
    }
  }, [props.asin]);

  return (
    <div className="text-center">
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;

