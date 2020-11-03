import React from 'react';
import { useParams } from 'react-router-dom';

import BookList from '../components/BookList';

const DUMMY_BOOKS = [
  {
    id: 'book1',
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee',
    creator: 'user1'
  },
  {
    id: 'book2',
    title: 'Grapes of Wrath',
    author: 'John Steinbeck',
    creator: 'user1'
  }
];

const UserBooks = () => {
  const userId = useParams().userId;
  const loadedBooks = DUMMY_BOOKS.filter(book => book.creator === userId);
  return <BookList items={loadedBooks} />;
};

export default UserBooks;
