import React, { useEffect, useState } from 'react';
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
    height: prop.tableHeight > prop.styledTableHeight ? prop.styledTableHeight + 2 : '578px',
  }),
  container: {
    borderRadius: '.4rem',
    maxHeight: '587px',
  },
}));

const MainTable = ({ rows, columns, rowHeight, isVirt, order, orderBy, onCreateSort, onSelectAllClick, selected, onDelete }) => {
  const [styledTableHeight] = useState(rowHeight * rows.length);
  const [tableHeight, setTableHeight] = useState(350);
  const [scroll, setScroll] = useState({
    top: 0,
    index: 0,
    end: Math.ceil((tableHeight * 2) / rowHeight),
  });

  const prop = { styledTableHeight, tableHeight };
  const classes = useStyles(prop);

  useEffect(() => {
    setTableHeight(isVirt ? 350 : styledTableHeight);
  }, [styledTableHeight, isVirt]);

  const handleOnScroll = ({ target }) => {
    const { scrollTop } = target;
    const scrolledRowHeight = rowHeight;
    const index = Math.floor(scrollTop / scrolledRowHeight);
    const padding = Math.ceil((rowHeight * 2) / rowHeight);
    const newStateTop = (scrollTop / scrolledRowHeight) * scrolledRowHeight;
    const newStateIndex = index - padding < 0 ? index : index - padding;
    const newStateEnd = index + Math.ceil((tableHeight * 2) / scrolledRowHeight);
    setScroll({ ...scroll, top: newStateTop, index: newStateIndex, end: newStateEnd });
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <TableToolBar onDelete={onDelete} />
        <TableContainer className={classes.container}>
          <Table
            onScroll={handleOnScroll}
            className={classes.tableContent}
            aria-labelledby="tableTitle"
            stickyHeader
            aria-label="data grid"
          >
            <TableHeader
              selected={selected}
              columns={columns}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={onSelectAllClick}
              onCreateSort={onCreateSort}
              rowCount={rows.length}
            />
            <TableGrid
              selected={selected}
              rows={rows}
              columns={columns}
              order={order}
              orderBy={orderBy}
              scroll={scroll}
              rowHeight={rowHeight}
              styledTableHeight={styledTableHeight}
            />
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

MainTable.defaultProps = {
  rowHeight: 52,
};

MainTable.propTypes = {
  rowHeight: PropTypes.number,
  isVirt: PropTypes.bool.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  onCreateSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      address: PropTypes.arrayOf(
        PropTypes.shape({
          state: PropTypes.string,
          city: PropTypes.string,
        })
      ),
      ageCategory: PropTypes.number,
      salary: PropTypes.number,
      distance: PropTypes.number,
      hackedDate: PropTypes.string,
      status: PropTypes.bool,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainTable;
