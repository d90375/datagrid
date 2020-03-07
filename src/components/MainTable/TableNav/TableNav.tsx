import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  nav: {
    borderTopLeftRadius: '.4rem',
    borderTopRightRadius: '.4rem',
    height: '150px',
    // backgroundColor: 'rgb(70, 74, 148)',
    background: 'linear-gradient(90deg, rgba(70, 74, 148, 1) 5%, rgba(126, 83, 180, 1) 81%, rgba(115, 82, 173, 1) 100%)',
  },
});

const TableNav = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.nav} />
    </>
  );
};

export default TableNav;
