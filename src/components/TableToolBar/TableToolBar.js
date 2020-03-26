import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import BooleanTool from './BooleanTool/BooleanTool';
import ColumnVis from './ClumnVis/ColumnVis';

const useToolbarStyles = makeStyles(() => ({
  root: {
    padding: '0 4px',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'sticky',
  },
}));

const TableToolBar = ({ onDelete, visibleColumns, onChangeVisible }) => {
  const classes = useToolbarStyles();
  const selected = useSelector(state => state.selectReducer);

  return (
    <Toolbar className={classes.root}>
      {selected.length > 0 ? (
        <IconButton aria-label="delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      ) : (
        <IconButton disabled aria-label="RemoveFromQueueIcon">
          <RemoveFromQueueIcon />
        </IconButton>
      )}
      <ColumnVis visibleColumns={visibleColumns} onChangeVisible={onChangeVisible} />
      <BooleanTool />
    </Toolbar>
  );
};

export default TableToolBar;

TableToolBar.propTypes = {
  onDelete: PropTypes.func.isRequired,
  visibleColumns: PropTypes.objectOf(PropTypes.bool).isRequired,
  onChangeVisible: PropTypes.func.isRequired,
};
