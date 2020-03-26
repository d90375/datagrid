import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';

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
  queue: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '18px',
    height: '18px',
    backgroundColor: '#5659A3',
    borderRadius: '50%',
  },
  qText: {
    color: '#FFF',
  },
  checkbox: {
    padding: 0,
    zIndex: '10',
  },
});

const TableHeader = ({
  columns,
  selected,
  orderBy,
  onCreateSort,
  onSelectAllClick,
  rowCount,
  visibleColumns: { isAge, isSalary, isDistance, isHackedData, isStatus },
}) => {
  const classes = useStyles();

  const visibleColumns = {
    id: true,
    firstName: true,
    lastName: true,
    address: true,
    ageCategory: isAge,
    salary: isSalary,
    distance: isDistance,
    hackedDate: isHackedData,
    status: isStatus,
  };

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell className={classes.checkbox} padding="checkbox">
            <Checkbox
              indeterminate={selected.length > 0 && selected.length < rowCount}
              checked={rowCount > 0 && selected.length === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          {columns.map(column => (
            <React.Fragment key={`header #${column.id}`}>
              {visibleColumns[column.id] && (
                <TableCell
                  key={`header #${column.id}`}
                  style={{ minWidth: column.width }}
                  padding={column.disablePadding ? 'none' : 'default'}
                  sortDirection={orderBy === column.id ? column.order : false}
                  align={column.align}
                  title="Hold shift to sort a few columns"
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? column.order : 'asc'}
                    onClick={onCreateSort(column)}
                  >
                    {column.label}
                    <span className={classes.visuallyHidden}>{column.order === 'desc' ? 'sorted descending' : 'sorted ascending'}</span>
                    {column.isSorted && column.isShift && (
                      <div className={classes.queue}>
                        <span className={classes.qText}>{column.queue} </span>
                      </div>
                    )}
                  </TableSortLabel>
                </TableCell>
              )}
            </React.Fragment>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

export default TableHeader;

TableHeader.propTypes = {
  onCreateSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(Object).isRequired,
  selected: PropTypes.arrayOf(PropTypes.number).isRequired,
  rowCount: PropTypes.number.isRequired,
  visibleColumns: PropTypes.objectOf(PropTypes.bool).isRequired,
};
