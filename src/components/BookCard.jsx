import React from 'react';
import './BookCard.css'
import Grid from '@mui/material/Grid';
import Modal from './Modal/modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import Divider from '@mui/material/Divider';

const BookCard = book => {
  const { title, author, price, image, addToCart, addedCount } = book;
  return (
    <Grid item xs={3}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="green iguana"
          sx={{objectFit: 'contain'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
          <Divider sx={{margin: '10px 0'}}/>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            {price}
            <CurrencyRubleIcon sx={{ fontSize: '18px' }} />
          </div>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={addToCart.bind(this, book)}
          >
            Добавить в корзину {addedCount > 0 && `(${addedCount})`}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BookCard;

{/* <div className="card-image"
        style={{
          height: '250px',
          zIndex: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image src={image} style={{ maxHeight: '250px', maxWidth: '200px' }} />
      </div>
      <Card.Content>
        <Card.Header>{title}</Card.Header>

        <Card.Meta className='meta'>
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
      </Button> */}