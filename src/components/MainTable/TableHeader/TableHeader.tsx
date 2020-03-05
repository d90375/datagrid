import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Column } from '../../../interfaces/interfaces';

interface PropTypes {
  columns: Column[];
}

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: '1.5em',
    },
  })
)(TableCell);

const TableHeader = ({ columns }: PropTypes) => {
  return (
    <>
      <TableHead>
        <TableRow>
          {columns.map(column => (
            <StyledTableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
              {column.label}
            </StyledTableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

export default TableHeader;