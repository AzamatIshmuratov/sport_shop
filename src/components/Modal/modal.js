import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function Modal(props) {
    const [open, setOpen] = React.useState(false);
    const [rating, setRating] = React.useState(0);

    const handleClickOpen = () => {
        setOpen(true);
        fetch('http://127.0.0.1:3080/api/get_country')
            .then(response => response.json())
            .then((info) => {
                info[0].forEach(c => {
                    if (c.Country === props.author) {
                        setRating(c.Rating);
                    }
                });
            })
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ paddingLeft: '0px' }}>
            <Button onClick={handleClickOpen}>
                {props.author}
            </Button>
            {/* <span className="date">{props.author}</span> */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{
                    padding: '20px'
                }}
            >
                <DialogTitle id="alert-dialog-title"
                    style={{
                        // background: '#de3e',
                        borderBottom: '1px solid black'
                    }}
                >{"Информация о производителе"}</DialogTitle>
                <DialogContent
                    style={{
                        // background: '#de3e',
                        fontWeight: 'bold'
                    }}
                >

                    <List component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <ListItemText primary={`Страна-производитель: ${props.author}`} />
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <ListItemText primary={`Рейтинг: ${rating}`} />
                        </ListItem>
                    </List>
                </DialogContent>
                {/* <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                     </Button>
                </DialogActions> */}
            </Dialog>
        </div>
    );
}