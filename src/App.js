import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React, { useState, useEffect } from 'react';
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'
import booksData from '../src/data/fantasy.json'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);
  return (
    <>
      <MyNav setSearchQuery={setSearchQuery} />
      <Container>
        <Welcome />
        <BookList books={books} searchQuery={searchQuery} />
      </Container>
      <MyFooter />
    </>
  )
}

export default App
