import React from 'react';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { makeStyles, lighten } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete';
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';

import Search from './Search/Search';
import BooleanTool from './BooleanTool/BooleanTool';

const useToolbarStyles = makeStyles(() => ({
  root: {
    padding: '0 4px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const TableToolBar = ({ numSelected, onSearch }) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar className={classes.root}>
      {numSelected > 0 ? (
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      ) : (
        <IconButton disabled aria-label="RemoveFromQueueIcon">
          <RemoveFromQueueIcon />
        </IconButton>
      )}
      <Search onSearch={onSearch} />
      <BooleanTool />
    </Toolbar>
  );
};

TableToolBar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default TableToolBar;
