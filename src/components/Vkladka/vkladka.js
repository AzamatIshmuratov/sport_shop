import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from '../../containers/Home';
import App from '../../containers/App';
import './vkladka.css';
import Third from './Third';
import Clients from './Clients';
import Contakts from './Contakts';
import Geography from './Geography';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
    },
}));


export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static"
                className='appBar'
            >
                <div className='topPanel'>
                    <div className="containEmbleme">
                        <img className='imgEmbleme' src="img/Embleme.png" alt="Письма мастера дзен" />
                    </div>
                    <ul className="ul_custom" style={{marginRight: '5px'}}>
                        <li>
                            <i className='icon-kc' />
                            <a target="_blank" href="http://hcsalavat.ru/" style={{ color: '#eee' }}>Перейти на сайт клуба</a>
                        </li>
                        <li>
                            <i className="icon-mail"></i>
                            <a href="/" style={{ color: '#eee' }}>Напишите нам</a>
                        </li>
                    </ul>
                </div>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className='vkladka'>

                    <Tab className='tabs' label="Главная" {...a11yProps(0)} />
                    <Tab label="Заказать" {...a11yProps(1)} />
                    <Tab label="Контакты" {...a11yProps(2)} />
                    <Tab label="География болельщика" {...a11yProps(3)} />
                    <Tab label="Программа лояльности" {...a11yProps(4)} />
                    <Tab label="Заказы" {...a11yProps(5)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Home />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <App />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Contakts />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Geography />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Third />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Clients />
            </TabPanel>
        </div>
    );
}
