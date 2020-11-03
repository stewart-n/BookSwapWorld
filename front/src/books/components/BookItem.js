import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';

import { AuthContext } from '../../shared/context/auth-context';
import './BookItem.css';

const BookItem = props => {
  const auth = useContext(AuthContext);
  
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  

  

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log('DELETING...');
  };

  return (
    <React.Fragment>
      
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="book-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this book? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="book-item">
        <Card className="book-item__content">
          <div className="book-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="book-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.author}</p>
          </div>
          <div className="book-item__actions">
           
           
            {auth.isLoggedIn && (
              <Button to={`/books/${props.id}`}>EDIT</Button>
            )}

            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default BookItem;
