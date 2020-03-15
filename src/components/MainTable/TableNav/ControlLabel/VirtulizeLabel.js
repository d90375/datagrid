import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  control: {
    color: '#FFF',
  },
});

const VirtualizeLabel = () => {
  const classes = useStyles();
  return (
    <>
      <FormControlLabel className={classes.control} control={<Switch color="primary" />} label="Virtualize" />
    </>
  );
};

export default VirtualizeLabel;
