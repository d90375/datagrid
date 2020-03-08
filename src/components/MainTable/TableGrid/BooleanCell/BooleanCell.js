import React from 'react';
import TableCell from '@material-ui/core/TableCell';

const BooleanCell = ({ inputLabel }) => {
  return (
    <>
      <TableCell component="th" scope="row" align="center">
        {inputLabel ? 'true' : 'false'}
      </TableCell>
    </>
  );
};

export default BooleanCell;
