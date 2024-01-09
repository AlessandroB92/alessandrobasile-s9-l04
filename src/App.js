import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import { Container, Row, Col } from 'react-bootstrap';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea'

import fantasy from './data/fantasy.json';

function App() {
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);

  const handleBookSelect = (asin) => {
    setSelectedBookAsin(asin);
  };

  return (
      <>
        <Container>
        <MyNav />
          <Row>
            <Col md={8}>
              <Welcome />
              <BookList books={fantasy} onBookSelect={handleBookSelect} selectedAsin={selectedBookAsin} />
            </Col>
            <Col md={4}>
              {selectedBookAsin && <CommentArea asin={selectedBookAsin} />}
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
  );
}

export default App;
