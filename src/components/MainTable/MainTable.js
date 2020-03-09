import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

import TableHeader from './TableHeader/TableHeader';
import TableGrid from './TableGrid/TableGrid';
import TableToolBar from '../TableToolBar/TableToolBar';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginBottom: theme.spacing(2),
    marginLeft: '2rem',
    marginRight: '2rem',
    marginTop: '-2rem',
    '&.MuiTableContainer-root': {
      width: 'auto',
    },
  },
  table: {
    minWidth: 750,
  },
  container: {
    borderRadius: '.4rem',
    maxHeight: '587px',
    // ' &.--hidden ': {
    //   height: 0,
    //   overflow: 'hidden',
    // },
  },
}));

const MainTable = ({ columns, rows }) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [selected, setSelected] = React.useState([]);
  const [dense, setDense] = React.useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

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

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rows.length;

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <TableToolBar emptyRows={emptyRows} numSelected={selected.length} />
        <TableContainer className={classes.container}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            stickyHeader
            aria-label="data grid"
          >
            <TableHeader
              columns={columns}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableGrid
              columns={columns}
              rows={rows}
              order={order}
              orderBy={orderBy}
              isSelected={isSelected}
              handleClick={handleClick}
              dense={dense}
              emptyRows={emptyRows}
            />
          </Table>
        </TableContainer>
      </Paper>
      {/*<ControlLabel handleChangeDense={handleChangeDense} dense={dense} />*/}
    </div>
  );
};

export default MainTable;
