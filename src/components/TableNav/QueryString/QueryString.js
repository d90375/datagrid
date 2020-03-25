import React from 'react';
import Button from '@material-ui/core/Button';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  btn: {
    color: '#FFF',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    marginRight: '.5rem',
    '&:hover': {
      border: '1px solid rgba(225,255,255,1)',
    },
  },
}));

const QueryString = () => {
  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.btn}
        variant="outlined"
        color="secondary"
        component={Link}
        to="/?SearchText=may"
        startIcon={<ImportExportIcon />}
      >
        Query
      </Button>
    </>
  );
};

export default QueryString;
