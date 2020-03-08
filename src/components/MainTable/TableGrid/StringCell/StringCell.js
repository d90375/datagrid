import React from 'react';
import TableCell from '@material-ui/core/TableCell';

const StringCell = ({ inputLabel }) => {
  return (
    <>
      <TableCell component="th" scope="row" align="center">
        {inputLabel}
      </TableCell>
    </>
  );
};

export default StringCell;
