import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import BookItem from './BookItem';
import Button from '../../shared/components/FormElements/Button';
import './BookList.css';

const BookList = props => {
  if (props.items.length === 0) {
    return (
      <div className="book-list center">
        <Card>
          <h2>No books found. Maybe create one?</h2>
          <Button to="/books/new">Share Book</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="book-list">
//     I was wondering if it is better to add <li> structure when using map in React.
      {props.items.map(book => (
        <BookItem
          key={book.id}
          id={book.id}
          image={book.imageUrl}
          title={book.title}
          author={book.author}
          creatorId={book.creator}
        />
      ))}
    </ul>
  );
};

export default BookList;
