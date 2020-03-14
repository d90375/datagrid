import React, { useState } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
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

  tableContent: prop => ({
    overflowY: 'scroll',
    borderCollapse: 'collapse',
    display: 'block',
    height: prop.OldTableHeight > prop.tableHeight ? prop.tableHeight + 2 : '578px',
  }),
  container: {
    borderRadius: '.4rem',
    maxHeight: '587px',
    // ' &.--hidden ': {
    //   height: 0,
    //   overflow: 'hidden',
    // },
  },
}));

const MainTable = ({ OldRows, rows, OldRowHeight, OldTableHeight, columns }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [selected, setSelected] = useState([]);
  const [dense, setDense] = useState(false);

  const [tableHeight] = useState(OldRowHeight * OldRows.length);
  const [scroll, setScroll] = useState({
    top: 0,
    index: 0,
    end: Math.ceil((OldTableHeight * 2) / OldRowHeight),
  });

  const prop = { tableHeight, OldTableHeight };
  const classes = useStyles(prop);

  const handleOnScroll = ({ target }) => {
    const { scrollTop } = target;
    const rowHeight = OldRowHeight;
    const index = Math.floor(scrollTop / rowHeight);
    const padding = Math.ceil((OldRowHeight * 2) / OldRowHeight);
    const newStateTop = (scrollTop / rowHeight) * rowHeight;
    const newStateIndex = index - padding < 0 ? index : index - padding;
    const newStateEnd = index + Math.ceil((OldTableHeight * 2) / rowHeight);
    setScroll({ ...scroll, top: newStateTop, index: newStateIndex, end: newStateEnd });
  };

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
            onScroll={handleOnScroll}
            className={classes.tableContent}
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
              OldTableHeight={OldTableHeight}
              tableHeight={tableHeight}
              scroll={scroll}
              OldRowHeight={OldRowHeight}
              OldRows={OldRows}
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
      {/* <ControlLabel handleChangeDense={handleChangeDense} dense={dense} /> */}
    </div>
  );
};

MainTable.defaultProps = {
  OldRowHeight: 52,
  OldTableHeight: 350,
};

MainTable.propTypes = {
  OldRowHeight: PropTypes.number,
  OldTableHeight: PropTypes.number,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainTable;
