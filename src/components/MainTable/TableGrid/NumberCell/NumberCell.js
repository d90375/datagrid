import React from 'react';
import TableCell from '@material-ui/core/TableCell';

const NumberCell = ({ inputLabel }) => {
  return (
    <>
      <TableCell component="th" scope="row" padding="none">
        {/*{column.format && typeof value === 'number' ? column.format(inputLabel) : inputLabel}*/}
        {inputLabel}
      </TableCell>
    </>
  );
};

export default NumberCell;
