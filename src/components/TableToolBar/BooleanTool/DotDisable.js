import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  dotDisable: {
    height: '10px',
    width: '10px',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '50%',
    marginRight: theme.spacing(1),
    display: 'inline-block',
  },
}));

const DotDisable = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.dotDisable} />
    </>
  );
};

export default DotDisable;
