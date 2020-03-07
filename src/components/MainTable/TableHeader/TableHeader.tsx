import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import { Order, Column, Row } from '../../../interfaces/interfaces';

interface PropTypes {
  columns: Column[];
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Row) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: '1.3em',
    },
  })
)(TableCell);

const useStyles = makeStyles({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
});

const TableHeader = ({ columns, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort }: PropTypes) => {
  const classes = useStyles();

  const createSortHandler = (property: keyof Row) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          {columns.map(column => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ minWidth: column.minWidth }}
              padding={column.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === column.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : 'asc'}
                onClick={createSortHandler(column.id)}
              >
                {column.label}
                {orderBy === column.id ? (
                  <span className={classes.visuallyHidden}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}

          {/*{columns.map(column => (*/}
          {/*  <StyledTableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>*/}
          {/*    {column.label}*/}
          {/*  </StyledTableCell>*/}
          {/*))}*/}
        </TableRow>
      </TableHead>
    </>
  );
};

export default TableHeader;
