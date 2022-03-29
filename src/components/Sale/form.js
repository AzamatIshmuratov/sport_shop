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

import { message } from 'antd';
import DialogOplata from './form_oplata';

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
            openOplata: false,
            openErr: false,
            zakaz: false,
            items: this.props.items,
            dateZakaz: '',
            deliv: false,
            del: 0,
            clientId: 0,

            price: 0,
            skidka: 0,
            priceSkid: 0,
        }

    }

    sendClientData = () => {
        // const formData = new FormData();
        // formData.append(`json`, JSON.stringify(this.state));

        let st = this.state;
        console.log('sendClientData------------', st);

        let client = {
            name: st.name,
            sur: st.sur,
            patr: st.patr,
            city: st.city,
            date: st.date,
            mail: st.mail,
        }

        for (let k in client) {
            if (!client[k].length) {
                message.warn('Заполните все необходимые поля');
                return;
            }
        }

        let allClients = localStorage.getItem('clients');
        let arr = [];
        console.log(allClients);
        if (allClients) {
            arr = JSON.parse(allClients);
        }
        arr.push(client);
        localStorage.setItem('clients', JSON.stringify(arr));

        let price = this.props.items.reduce((acc, el) => acc + el.price, 0);
        let skidka = price > 4000 ? 25 : 0;
        let priceSkid = skidka ? price * (1 - skidka / 100) : price;
        let date = new Date();
        let formDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

        this.setState({
            openSuc: true,
            zakaz: true,
            openOplata: true,
            price: price,
            skidka: skidka,
            priceSkid: priceSkid,
            dateZakaz: formDate,
        });
        

        message.success('Вы успешно зарегистрированы!');
    }

    closeModalOplata = () => {
        this.setState({openOplata: false})
    }

    sendZakaz = () => {
        // отправляем заказ

        let zakazs = localStorage.getItem('zakazs');
        let arr = [];
        console.log(zakazs);
        if (zakazs) {
            arr = JSON.parse(zakazs);
        }

        this.state.items.forEach(item => {
            let obj = {};
            obj.mail = this.state.mail;
            obj.surname = this.state.sur;
            obj.title = item.title;
            obj.item_id = item.id;
            obj.count_item = item.addedCount + 1;
            obj.cost = (item.addedCount + 1) * item.price;
            obj.dateZakaz = this.state.dateZakaz;
            obj.deliv = this.state.deliv;
            obj.skidka = this.state.skidka;
            arr.push(obj);
        })

        localStorage.setItem('zakazs', JSON.stringify(arr));

        message.success('Заказ успешно сформирован');
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
            <form noValidate autoComplete="off" style={{ padding: '10px', marginTop: '60px' }} >
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                }}>
                    <div
                        style={{
                            maxWidth: '300px',
                            width: '35%',
                            display: 'flex',
                            // flexWrap: 'wrap'
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: '20px'
                        }}
                    >
                        <div style={{
                            width: '100%',
                            padding: '10px',
                            border: '2px solid green',
                            borderRadius: '4px',
                        }}
                        >Ваши персональные данные</div>
                        {/* <div style={{ width: '100%'}}> */}
                        <TextField style={{ width: '100%' }} id="fam" label="Фамилия" type="search" required variant="outlined" onChange={e => this.setState({ sur: e.target.value })} />
                        <TextField style={{ width: '100%' }} id="name" label="Имя" type="search" required variant="outlined" onChange={e => this.setState({ name: e.target.value })} />
                        <TextField style={{ width: '100%' }} id="sur" label="Отчество" type="search" required variant="outlined" onChange={e => this.setState({ patr: e.target.value })} />
                        <TextField style={{ width: '100%' }} id="city" label="Город" type="search" required variant="outlined" onChange={e => this.setState({ city: e.target.value })} />
                        <TextField
                            style={{ width: '100%' }}
                            id="mail"
                            label="Почта"
                            required
                            variant="outlined"
                            onChange={e => this.setState({ mail: e.target.value })}
                        />
                        <DatePickers getDate={this.getDate} style={{ width: '100%' }} />
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            // className={classes.button}
                            startIcon={<SaveIcon />}
                            style={{
                                // marginTop: '10px',
                                // marginLeft: '10px',
                                width: '100%'
                            }}
                            onClick={this.sendClientData}
                        >
                            Сохранить данные
                        </Button>

                        {/* antd добавить */}
                        {/* <Snackbar open={this.state.openErr} autoHideDuration={6000} onClose={this.handleCloseErr}>
                            <Alert onClose={this.handleCloseErr} severity="error">Error!</Alert>
                        </Snackbar> */}

                        <DialogOplata
                            name={this.state.name}
                            sur={this.state.sur}
                            city={this.state.city}
                            openOplata={this.state.openOplata}
                            deliv={this.state.deliv}
                            del={this.state.del}
                            price={this.state.price}
                            skidka={this.state.skidka}
                            priceSkid={this.state.priceSkid}
                            dateZakaz={this.state.dateZakaz}
                            handleCloseOplata={this.closeModalOplata}
                            handleChange={this.handleChange}
                            sendZakaz={this.sendZakaz}
                        />
                    </div>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', maxHeight: '650px', overflow: 'scroll', marginLeft: '10px' }}>
                        {this.props.items.map(item =>
                            <MediaCard item={item} />
                        )}
                    </div>
                </div>



            </form >
        );
    }

}