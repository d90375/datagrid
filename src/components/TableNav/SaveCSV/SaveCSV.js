import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  btn: {
    color: '#FFF',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    '&:hover': {
      border: '1px solid rgba(225,255,255,1)',
    },
  },
}));

const SaveCSV = ({ onSaveCSV }) => {
  const classes = useStyles();
  return (
    <>
      <Button className={classes.btn} onClick={onSaveCSV} variant="outlined" startIcon={<SaveIcon />}>
        CSV
      </Button>
    </>
  );
};

export default SaveCSV;

SaveCSV.propTypes = {
  onSaveCSV: PropTypes.func,
};
