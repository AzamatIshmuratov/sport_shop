import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';
import Grid from '@mui/material/Grid';

import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;

    // fetch('http://127.0.0.1:3080/api/getItems')
    fetch('files/items.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        let newData = []
        data.forEach(e => newData.push({
          id: e.Item_Id,
          title: e.TypeItem,
          author: e.Country,
          price: e.Value,
          image: `./img/${e.TypeItem}.png`
        }));
        return (newData);
      })
      .then(data => setBooks(data));
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Filter />
        <Grid container spacing={1} sx={{justifyContent: 'space-around'}}>
          {!isReady
            ? 'Загрузка...'
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Grid>
        {/* <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Загрузка...'
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group> */}
      </Container>
    );
  }
}

export default App;
