import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  btn: {
    color: '#FFF',
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
}));

const SaveCSV = () => {
  const classes = useStyles();
  return (
    <>
      <Button className={classes.btn} variant="outlined" startIcon={<SaveIcon />}>
        CSV
      </Button>
    </>
  );
};

export default SaveCSV;
