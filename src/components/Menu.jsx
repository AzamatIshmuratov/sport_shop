import React from "react";
import { Menu } from "semantic-ui-react";
// import Sale from "./Sale/sale";
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CartComponent = ({ title, id, image, removeFromCart }) => (
  // <List selection divided verticalAlign="middle">
  //   <List.Item>
  //     <List.Content floated="right">
  //       <Button onClick={removeFromCart.bind(this, id)} color="red">
  //         Удалить
  //       </Button>
  //     </List.Content>
  //     <Image avatar src={image} />
  //     <List.Content>{title}</List.Content>
  //   </List.Item>
  // </List>
  <List dense sx={{ width: '100%', minWidth: 300, bgcolor: 'background.paper' }}>
    <ListItem
      key={id}
      disablePadding
    >
      <ListItemButton sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <ListItemAvatar>
          <Avatar
            src={image}
          />
        </ListItemAvatar>
        <ListItemText id={id} primary={title} />
        <Button onClick={removeFromCart.bind(this, id)}>
          Удалить
        </Button>
      </ListItemButton>
    </ListItem>
  </List>
);

const MenuComponent = ({ totalPrice, count, items }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    // <Box sx={{
    //   display: 'flex',
    //   justifyContent: 'space-between',
    //   flexGrow: 1,
    //   width: '100%',
    //   alignItems: 'center',
    //   border: '1px solid black',
    //   borderRadius: '6px'
    // }}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container >
        <Grid item xs={2}>
          <Item>Магазин атрибутики</Item>
        </Grid>
        <Grid item xs>
          <Item>Список товаров</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб</Item>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            color="success"
            onClick={handleClick}
            sx={{ 
              width: '100%', 
              textTransform: 'none',
              borderColor: '#808080'
            }}
          >
            Корзина (<b>{count}</b>)
          </Button>
        </Grid>
      </Grid>
      {/* <div
        style={{
          height: '100%',
          paddingLeft: '2px'
        }}
      >
        Магазин атрибутики
      </div>

      <div>
        Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб
      </div>
      <Button variant="contained" onClick={handleClick}>
        Корзина (<b>{count}</b>)
      </Button> */}
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <React.Fragment>
          {items.map(book => (
            <CartComponent {...book} />
          ))}
        </React.Fragment>
      </Popover>

    </Box>
  )
};

// const MenuComponent = ({ totalPrice, count, items }) => (
//   <Menu>
//     <Menu.Item name="browse">Магазин атрибутики</Menu.Item>

//     <Menu.Menu position="right">
//       <Menu.Item name="signup">
//         Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
//       </Menu.Item>
//       <Popup
//         trigger={
//           <Menu.Item name="help">
//             Корзина (<b>{count}</b>)
//           </Menu.Item>
//         }
//         content={
//           <React.Fragment>
//             {items.map(book => (
//               <CartComponent {...book} />
//             ))}
//             {/* <Sale/> */}
//           </React.Fragment>
//         }
//         // content={items.map(book => (
//         //   <CartComponent {...book} />
//         // ))}
//         on="click"
//         hideOnScroll
//       />
//       <Sale items={items}/>
//     </Menu.Menu>
//   </Menu>
// );

export default MenuComponent;
