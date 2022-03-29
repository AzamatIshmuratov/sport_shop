import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { connect } from 'react-redux'
import Form from './form';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: '10px',
        // marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Sale(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (props.saled === true) {
            handleClickOpen();
            props.handleCloseSaled();
        }
        // return () => {
        //     effect
        // };
    }, [props.saled])

    const handleClickOpen = () => {
        setOpen(true);
        console.log('props', props.items);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            {/* <Button onClick={handleClickOpen} style={{ marginTop: '4px' }}>
                Оформить
            </Button> */}
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} style={{ zIndex: 1 }}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Покупка
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Отмена
                        </Button>
                    </Toolbar>
                </AppBar>
                <Form items={props.items} />
                {/* <List>
                    <ListItem button>
                        <ListItemText primary={props.items.length} secondary="Titania" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                    </ListItem>
                </List> */}
            </Dialog>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        items: state.cart.items
    }
}

export default connect(mapStateToProps)(Sale);