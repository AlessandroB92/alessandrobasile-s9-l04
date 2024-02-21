import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

const BookList = ({ books, searchQuery }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const changeSelectedBook = (asin) => {
    setSelectedBook(asin);
  };

  return (
    <>
      <Row>
        <Col md={8}>
          <Row className="g-2 mt-3">
            {Array.isArray(books) && books.length > 0 ? (
              books
                .filter((b) =>
                  b.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((b) => (
                  <Col xs={12} md={4} key={b.asin}>
                    <SingleBook
                      book={b}
                      selectedBook={selectedBook}
                      changeSelectedBook={changeSelectedBook}
                    />
                  </Col>
                ))
            ) : (
              <Col xs={12} className="text-center">Nessun libro trovato</Col>
            )}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;

