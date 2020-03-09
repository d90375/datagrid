import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const EnumCell = () => {
  const classes = useStyles();
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange}>
          <MenuItem value={10}>Kid</MenuItem>
          <MenuItem value={20}>Young</MenuItem>
          <MenuItem value={30}>Adult</MenuItem>
          <MenuItem value={40}>Sage</MenuItem>
          <MenuItem value={50}>Pension</MenuItem>
          <MenuItem value={60}>Old</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default EnumCell;
