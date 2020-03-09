import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {},
  title: { color: theme.palette.common.black },
  text: { color: theme.palette.primary.main },
}));

const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <header className={classes.root}>
      <h1 className={classes.title}>
        <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
          Data
          <span className={classes.text}>Grid </span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
