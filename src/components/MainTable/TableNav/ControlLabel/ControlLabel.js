import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { makeStyles } from '@material-ui/core/styles';
import VirtualizeLabel from './VirtulizeLabel';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  root: {
    marginTop: '5px',
    display: 'flex',
    flexDirection: 'column',
  },
  control: {
    color: '#FFF',
  },
});

const ControlLabel = ({ handleChangeDense, dense }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <FormControlLabel
          className={classes.control}
          control={<Switch checked={dense} onChange={handleChangeDense} color="primary" />}
          label="Compact"
        />
        <VirtualizeLabel />
      </div>
    </div>
  );
};

export default ControlLabel;
