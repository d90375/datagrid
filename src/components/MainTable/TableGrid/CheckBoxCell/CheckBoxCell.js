import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  checkCell: {
    top: 0,
    left: 0,
    zIndex: 1,
    position: 'sticky',
    padding: 0,
    backgroundColor: '#f7f6f9',
  },
}));

const CheckBoxCell = ({ isItemSelected }) => {
  const classes = useStyles();

  return (
    <>
      <TableCell className={classes.checkCell} padding="checkbox">
        <Checkbox checked={isItemSelected} />
      </TableCell>
    </>
  );
};

export default CheckBoxCell;

CheckBoxCell.propTypes = {
  isItemSelected: PropTypes.bool.isRequired,
};
