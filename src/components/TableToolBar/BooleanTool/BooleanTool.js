import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import DotActive from './DotActive';
import DotDisable from './DotDisable';
import { toggleActiveStatus, toggleDisableStatus } from '../../../store/actions/dataAction';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: '.5rem',
  },
  active: {
    fontSize: '0.7rem',
    color: theme.custom.color.active,
  },
  disable: {
    fontSize: '0.7rem',
    color: theme.palette.primary.light,
  },
  colorDisabled: {
    color: 'gray',
  },
}));

const BooleanTool = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { disableBool, activeBool } = useSelector(state => ({
    disableBool: state.dataReducer.disableBool,
    activeBool: state.dataReducer.activeBool,
  }));
  const onActiveSort = event => {
    dispatch(toggleActiveStatus(event));
  };

  const onDisableSort = () => {
    dispatch(toggleDisableStatus());
  };

  return (
    <div className={classes.root}>
      <Button className={clsx(classes.active, { [classes.colorDisabled]: !activeBool })} onClick={onActiveSort}>
        <DotActive />
        <span>Active</span>
      </Button>

      <Button className={clsx(classes.disable, { [classes.colorDisabled]: !disableBool })} onClick={onDisableSort}>
        <DotDisable />
        <span>Disabled</span>
      </Button>
    </div>
  );
};

export default BooleanTool;
