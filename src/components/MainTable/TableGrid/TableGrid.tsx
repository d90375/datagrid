import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Column, Row } from '../../../interfaces/interfaces';

interface PropTypes {
  columns: Column[];
  rows: Row[];
  dense: boolean;
}

const TableGrid = ({ rows, columns, dense }: PropTypes) => {
  return (
    <>
      <TableBody>
        {rows.map((row: any) => {
          return (
            <TableRow style={{ height: dense ? 33 : 53 }} hover role="checkbox" tabIndex={-1} key={row.id}>
              {columns.map(column => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} align={column.align}>
                    {column.format && typeof value === 'number' ? column.format(value) : value}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </>
  );
};

export default TableGrid;
