import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

import TableHeader from './TableHeader/TableHeader';
import ControlLabel from './ControlLabel/ControlLabel';
import TableGrid from './TableGrid/TableGrid';

import { Column, Row, Order } from '../../interfaces/interfaces';
import stableSort from './TableGrid/helpers/stableSort';
import getComparator from './TableGrid/helpers/getComparator';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TableBody from '@material-ui/core/TableBody';

interface PropTypes {
  columns: Column[];
  rows: Row[];
}

const useStyles = makeStyles({
  container: {
    borderRadius: '.4rem',
    maxHeight: '587px',
    // ' &.--hidden ': {
    //   height: 0,
    //   overflow: 'hidden',
    // },
  },
  paper: {
    marginLeft: '2rem',
    marginRight: '2rem',
    marginTop: '-2rem',
    '&.MuiTableContainer-root': {
      width: 'auto',
    },
  },
});

const MainTable = ({ columns, rows }: PropTypes) => {
  const classes = useStyles();

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Row>('firstName');
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Row) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.firstName);

      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string): boolean => selected.indexOf(name) !== -1;

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <TableContainer className={classes.container}>
          <Table size={dense ? 'small' : 'medium'} stickyHeader aria-label="data grid">
            <TableHeader
              columns={columns}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.firstName);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      style={{ height: dense ? 33 : 53 }}
                      hover
                      role="checkbox"
                      onClick={event => handleClick(event, row.firstName)}
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                    >
                      {columns.map((column, i) => {
                        const value = row[column.id];
                        return i === 0 ? (
                          <TableCell padding="checkbox">
                            <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                          </TableCell>
                        ) : (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
            {/*<TableGrid*/}
            {/*  dense={dense}*/}
            {/*  rows={rows}*/}
            {/*  columns={columns}*/}
            {/*  order={order}*/}
            {/*  orderBy={orderBy}*/}
            {/*  isSelected={isSelected}*/}
            {/*  handleClick={handleClick}*/}
            {/*/>*/}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <ControlLabel handleChangeDense={handleChangeDense} dense={dense} />
    </>
  );
};

export default MainTable;
