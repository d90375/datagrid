import React from 'react';
import Button from '@material-ui/core/Button';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  btn: {
    color: '#FFF',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    marginRight: '.5rem',
  },
}));

const QueryString = () => {
  const classes = useStyles();

  return (
    <>
      <Button className={classes.btn} variant="outlined" color="secondary" startIcon={<ImportExportIcon />}>
        Query
      </Button>
    </>
  );
};

export default QueryString;
