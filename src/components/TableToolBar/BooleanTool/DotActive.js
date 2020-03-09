import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  dotActive: {
    height: '10px',
    width: '10px',
    backgroundColor: theme.custom.color.active,
    borderRadius: '50%',
    marginRight: theme.spacing(1),
    display: 'inline-block',
  },
}));

const DotActive = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.dotActive} />
    </>
  );
};

export default DotActive;
