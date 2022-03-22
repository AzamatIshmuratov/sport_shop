import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/material/styles';
import FormattedInputs from './numberMask';
import DatePickers from './birth';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/lab/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import Icon from '@mui/material/Icon';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import MediaCard from './card';

// import { makeStyles } from '@mui/material/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& .MuiTextField-root': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
// }));const classes = useStyles();

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sur: '',
            patr: '',
            city: '',
            num: '',
            date: 0,
            mail: '',
            openSuc: false,
            openSucZakaz: false,
            openErr: false,
            zakaz: false,
            items: this.props.items,
            dateZakaz: '',

            clientId: 0,
            deliv: false,
            del: 0,
            price: 0,
            skidka: 0,
            priceSkid: 0,
        }

    }

    sendClientData = () => {
        // const formData = new FormData();
        // formData.append(`json`, JSON.stringify(this.state));
        try {
            fetch('http://127.0.0.1:3080/api/sendClientData', {
                method: "POST",
                headers: {
                    // "content-type": "application/x-www-form-urlencoded",
                    "content-type": "application/json",
                },
                cookies: [],
                body: JSON.stringify(this.state)
            })
                .then(response => response.json())
                .then((info) => {

                    let price = this.props.items.reduce((acc, el) => acc + el.price, 0);
                    let skidka = price > 4000 ? 25 : 0;
                    let priceSkid = skidka ? price * (1 - skidka / 100) : price;
                    let date = new Date();
                    let formDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
                    this.setState({
                        openSuc: true,
                        zakaz: true,
                        price: price,
                        skidka: skidka,
                        priceSkid: priceSkid,
                        dateZakaz: formDate,
                    });
                })
                .then(() => { })
        }
        catch (e) {
            console.log(e);
            this.setState({ openErr: true })
        }
    }

    sendZakaz = () => {
        // отправляем заказ
        fetch('http://127.0.0.1:3080/api/sendZakaz', {
            method: "POST",
            headers: {
                // "content-type": "application/x-www-form-urlencoded",
                "content-type": "application/json",
            },
            cookies: [],
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(() => {
                this.setState({openSucZakaz: true})
            });
    }

    getNumber = (num) => {
        this.setState({ num })
    }
    getDate = (date) => {
        this.setState({ date })
    }

    // handleClick = () => {
    //     open = true
    // };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ openSuc: false });
    };
    handleCloseZakaz = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ openSucZakaz: false });
    };

    handleCloseErr = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ openErr: false });
    };

    handleChange = (event) => {
        this.setState({ deliv: event.target.checked });
        if (this.state.deliv) {
            this.setState({ del: 0 });
        }
        else this.setState({ del: 200 });

    };

    render() {
        return (
            <form noValidate autoComplete="off" style={{ padding: '10px' }} >
                <div style={{
                    display: 'flex', flexDirection: 'row', width: '100%'
                }}>
                    <div style={{ width: '35%' }}>
                        <div style={{
                            width: '300px',
                            padding: '10px',
                            border: '2px solid green',
                            marginBottom: '10px',
                            borderRadius: '4px',
                        }}
                        >Ваши персональные данные</div>
                        <div>
                            <TextField id="fam" label="Фамилия" type="search" variant="outlined" onChange={e => this.setState({ sur: e.target.value })} />
                            <TextField id="name" label="Имя" type="search" variant="outlined" onChange={e => this.setState({ name: e.target.value })} />
                        </div>
                        <div>
                            <TextField id="sur" label="Отчество" type="search" variant="outlined" onChange={e => this.setState({ patr: e.target.value })} />
                            <TextField id="city" label="Город" type="search" variant="outlined" onChange={e => this.setState({ city: e.target.value })} />
                        </div>
                        <div>
                            <FormattedInputs getNumber={this.getNumber} />
                            <TextField id="mail" label="Почта" type="search" variant="outlined" onChange={e => this.setState({ mail: e.target.value })} />
                        </div>
                        <DatePickers getDate={this.getDate} />
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            // className={classes.button}
                            startIcon={<SaveIcon />}
                            style={{
                                marginTop: '10px',
                                marginLeft: '10px'
                            }}
                            onClick={this.sendClientData}
                        >
                            Save
                </Button>
                        <Snackbar open={this.state.openSuc} autoHideDuration={4000} onClose={this.handleClose}>
                            <Alert onClose={this.handleClose} severity="success">
                                Вы успешно зарегистрированы!
                     </Alert>
                        </Snackbar>
                        <Snackbar open={this.state.openErr} autoHideDuration={6000} onClose={this.handleCloseErr}>
                            <Alert onClose={this.handleCloseErr} severity="error">Error!</Alert>
                        </Snackbar>

                        {this.state.zakaz ?
                            <React.Fragment>
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
                                        control={<Switch deliv={this.state.deliv} onChange={this.handleChange} name="checked" />}
                                        label="Доставка"
                                    />
                                    <ListItem button>
                                        <ListItemIcon>
                                            <SendIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={`Цена: ${this.state.price + this.state.del}`} />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <SendIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={`Ваша скидка: ${this.state.skidka}`} />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <SendIcon />
                                        </ListItemIcon>
                                        <strong><ListItemText primary={`Цена со скидкой: ${this.state.priceSkid + this.state.del}`} /></strong>
                                    </ListItem>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.sendZakaz}
                                    >
                                        Оплатить
                    </Button>
                                    <Snackbar open={this.state.openSucZakaz} autoHideDuration={4000} onClose={this.handleCloseZakaz}>
                                        <Alert onClose={this.handleCloseZakaz} severity="success">
                                            Заказ сформирован!
                     </Alert>
                                    </Snackbar>
                                </div>

                            </React.Fragment>
                            : null
                        }
                    </div>
                    <div style={{ width: '65%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', maxHeight: '650px', overflow: 'scroll' }}>
                        {this.props.items.map(item =>
                            <MediaCard item={item} />
                        )}
                    </div>
                </div>



            </form >
        );
    }

}