import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Дата рождения"
        type="date"
        defaultValue="1998-01-01"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => props.getDate(e.target.value)}
      />
    </form>
  );
}