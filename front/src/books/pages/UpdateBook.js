import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './BookForm.css';

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

const UpdateBook = () => {
  const [isLoading, setIsLoading] = useState(true);
  const bookId = useParams().bookId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const identifiedBook = DUMMY_BOOKS.find(book => book.id === bookId);

  useEffect(() => {
    if (identifiedBook) {
      setFormData(
        {
          title: {
            value: identifiedBook.title,
            isValid: true
          },
          description: {
            value: identifiedBook.description,
            isValid: true
          }
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedBook]);

  const bookUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedBook) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find book!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="book-form" onSubmit={bookUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE BOOK
      </Button>
    </form>
  );
};

export default UpdateBook;
