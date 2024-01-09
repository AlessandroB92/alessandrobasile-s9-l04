import React, { useState } from 'react';
import SingleBook from './SingleBook';
import { Col, Form, Row } from 'react-bootstrap';

const BookList = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label className='fs-5 fw-bold py-2 px-1'>Search a book</Form.Label>
            <Form.Control
              className='searchInput'
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {props.books
          .filter((b) =>
            b.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((b) => (
            <Col xs={12} md={4} key={b.asin}>
              <SingleBook
                book={b}
                onBookSelect={props.onBookSelect}
                isSelected={props.selectedAsin === b.asin}
              />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default BookList;
