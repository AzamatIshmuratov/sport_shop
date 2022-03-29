import React from "react";
import { Menu } from "semantic-ui-react";
import Sale from "./Sale/sale";
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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CartComponent = ({ title, id, image, removeFromCart }) => (
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
        <Button onClick={() => {
          removeFromCart(id);
        }
        }>
          Удалить
        </Button>
      </ListItemButton>
    </ListItem>
  </List>
);

const MenuComponent = ({ totalPrice, count, items }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [saled, setSaled] = React.useState(false);

  const handleCloseSaled = () => setSaled(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  console.log(count);
  return (
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
            startIcon={<ShoppingCartIcon />}
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
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end' }}>
          {items.map(book => (
            <CartComponent {...book} />
          ))}
          {items.length
            ?

            <Button
              style={{ textTransform: 'none' }}
              onClick={() => {
                setSaled(true);
                handleClose();
              }}
              color="success"
              variant="contained"
            >
              Оформить
            </Button>
            : null
          }
        </div>
      </Popover>
      <Sale
        items={items}
        saled={saled}
        handleCloseSaled={handleCloseSaled}
      />
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
