import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  btn: {},
  icon: {},
}));

const HeaderButton = () => {
  const classes = useStyles();

  return (
    <>
      <VisibilityIcon style={{ fontSize: 17 }} className={classes.icon} />
    </>
  );
};

export default HeaderButton;
