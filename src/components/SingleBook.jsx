import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Card
        onClick={() => setSelected(!selected)}
        style={{ border: selected ? '3px solid red' : 'none' }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
      <CommentArea selectedBook={selected ? props.book : null} />
    </>
  );
};

export default SingleBook;