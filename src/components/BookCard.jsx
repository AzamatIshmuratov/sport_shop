import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import './BookCard.css'

import Modal from './Modal/modal';

const BookCard = book => {
  const { title, author, price, image, addToCart, addedCount } = book;
  return (
    <Card>
      <div className="card-image"
        style={{
          height: '250px',
          zIndex: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image src={image} style={{maxHeight: '250px', maxWidth: '200px'}}/>
      </div>
      <Card.Content>
        <Card.Header>{title}</Card.Header>

        <Card.Meta className='meta'>
          {/* <span className="date">{author}</span> */}
          <Modal author={author} />
        </Card.Meta>

      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="rub" />
          {price}
        </a>
      </Card.Content>
      <Button
        onClick={addToCart.bind(this, book)}
      >
        Добавить в корзину {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};

export default BookCard;
