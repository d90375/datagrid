import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

interface PropTypes {
  handleChangeDense: any;
  dense: boolean;
}

const useStyles = makeStyles({
  control: {
    margin: '.5rem 0  .5rem  2rem ',
  },
});

const ControlLabel = ({ handleChangeDense, dense }: PropTypes) => {
  const classes = useStyles();
  return (
    <>
      <FormControlLabel className={classes.control} control={<Switch checked={dense} onChange={handleChangeDense} />} label="Magic" />
    </>
  );
};

export default ControlLabel;
