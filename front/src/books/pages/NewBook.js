import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './BookForm.css';

const NewBook = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      /*address: {
        value: '',
        isValid: false
      }*/
    },
    false
  );

  const bookSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className="book-form" onSubmit={bookSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="author"
        element="textarea"
        label="Author"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid author (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD BOOK
      </Button>
    </form>
  );
};

export default NewBook;