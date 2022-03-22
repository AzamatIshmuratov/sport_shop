import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon } from 'semantic-ui-react';

const useStyles = makeStyles({
    root: {
        width: 150,
        maxHeight: 300,
        margin: '10px'
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(p) {
    const classes = useStyles();

    console.log(p.item);
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={p.item.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {p.item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {p.item.author}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary" style={{ paddingLeft: '0px' }}>
                    <Icon name="rub" />
                    {p.item.price}
                </Button> */}
                <a>
                    <Icon name="rub" />
                    {p.item.price}
                </a>
            </CardActions>
        </Card>
    );
}