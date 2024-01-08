import React, { Component } from 'react';
import SingleBook from './SingleBook';
import { Col, Form, Row } from 'react-bootstrap';

class BookList extends Component {
  state = {
    searchQuery: '',
  };

  render() {
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
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col xs={12} md={4} key={b.asin}>
                <SingleBook
                  book={b}
                  onBookSelect={this.props.onBookSelect}
                  isSelected={this.props.selectedAsin === b.asin}
                />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;

