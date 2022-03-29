import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


export default function DialogOplata(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // React.useEffect(() => {
    //     setOpen(props.openOplata);
    //     // return () => {
    //     //     effect
    //     // };
    // }, [props.openOplata])

    return (
        <Dialog
            style={{zIndex: 100}}
            open={props.openOplata}
            onClose={props.handleCloseOplata}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Оформление доставки"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div style={{
                        width: '300px',
                        padding: '10px',
                        marginTop: '20px',
                        border: '2px solid green',
                        borderRadius: '4px'
                    }}
                    >
                        <div>Заказ</div>
                        <FormControlLabel
                            control={<Switch deliv={props.deliv} onChange={props.handleChange} name="checked" />}
                            label="Доставка"
                        />
                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Фамилия: ${props.sur}`} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Имя: ${props.name}`} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Город: ${props.city}`} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Ваша скидка: ${props.skidka}`} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <strong><ListItemText primary={`Цена со скидкой: ${props.priceSkid + props.del}`} /></strong>
                        </ListItem>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    // variant="contained"
                    color="primary"
                    onClick={props.sendZakaz}
                >
                    Оплатить
                </Button>
                <Button onClick={props.handleCloseOplata} autoFocus>
                    Отмена
                </Button>
            </DialogActions>
        </Dialog>
    );
}