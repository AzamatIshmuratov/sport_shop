import React from 'react';
import { Menu } from 'semantic-ui-react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
  <React.Fragment>

    <Divider sx={{margin: '10px 0'}}/>

    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
      {/* <Menu.Item
      active={filterBy === 'all'}
      onClick={setFilter.bind(this, 'all')}>
      Все
    </Menu.Item> */}
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          style={{ textTransform: 'none' }}
          onClick={setFilter.bind(this, 'all')}
          color="success"
          variant={filterBy === 'all' ? "contained" : 'outlined'}
        >
          Все
        </Button>
        <Button
          style={{ textTransform: 'none' }}
          onClick={setFilter.bind(this, 'price_high')}
          color="success"
          variant={filterBy === 'price_high' ? "contained" : 'outlined'}
        >
          Цена (дорогие)</Button>
        <Button
          style={{ textTransform: 'none' }}
          onClick={setFilter.bind(this, 'price_low')}
          color="success"
          variant={filterBy === 'price_low' ? "contained" : 'outlined'}
        >
          Цена (дешевые)</Button>
        <Button
          style={{ textTransform: 'none' }}
          onClick={setFilter.bind(this, 'author')}
          color="success"
          variant={filterBy === 'author' ? "contained" : 'outlined'}
        >
          Производитель</Button>
      </ButtonGroup>
      <Paper
        component="form"
        sx={{ p: '0px 2px', display: 'flex', alignItems: 'center', width: 300 }}
      >
        {/* <Input
        icon="search"
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder="Введите запрос..."
      /> */}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Введите запрос..."
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Grid>
    <Divider sx={{margin: '10px 0'}}/>
  </React.Fragment>

);

export default Filter;
