import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DotActive from './DotActive';
import DotDisable from './DotDisable';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: theme.spacing(1),
  },
  active: {
    marginRight: theme.spacing(1),
    color: theme.custom.color.active,
  },
  disable: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.light,
  },
}));

const BooleanTool = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.active}>
        <DotActive />
        <span>Active</span>
      </div>
      <div className={classes.disable}>
        <DotDisable />
        <span>Disabled</span>
      </div>
    </div>
  );
};

export default BooleanTool;
