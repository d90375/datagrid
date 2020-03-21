import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setAllRowSelected } from '../../../store/actions/select';

// const StyledTableCell = withStyles((theme: Theme) =>
//   createStyles({
//     head: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//       fontSize: '1.3em',
//     },
//   })
// )(TableCell);

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

const TableHeader = ({ rows, columns, order, orderBy, onRequestSort, rowCount }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selected = useSelector(state => state.selectReducer);
  const handleSelectAllClick = event => {
    dispatch(setAllRowSelected(event, rows));
  };

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={selected.length > 0 && selected.length < rowCount}
              checked={rowCount > 0 && selected.length === rowCount}
              onChange={handleSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          {columns.map(column => (
            <>
              <TableCell
                style={{ minWidth: column.width }}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
                align={column.align}
              >
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={orderBy === column.id ? order : 'asc'}
                  onClick={createSortHandler(column.id)}
                >
                  {column.label}
                  <span className={classes.visuallyHidden}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</span>
                </TableSortLabel>
              </TableCell>
            </>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

export default TableHeader;

TableHeader.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
