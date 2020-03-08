import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

const CheckBoxCell = ({ isItemSelected }) => {
  return (
    <>
      <TableCell padding="checkbox">
        <Checkbox component="th" scope="row" checked={isItemSelected} />
      </TableCell>
    </>
  );
};

export default CheckBoxCell;
