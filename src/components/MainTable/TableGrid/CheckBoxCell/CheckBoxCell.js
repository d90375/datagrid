import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const CheckBoxCell = ({ isItemSelected }) => {
  return (
    <>
      <TableCell padding="checkbox">
        <Checkbox checked={isItemSelected} />
      </TableCell>
    </>
  );
};

export default CheckBoxCell;

CheckBoxCell.propTypes = {
  isItemSelected: PropTypes.bool.isRequired,
};
