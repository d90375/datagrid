import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import getComparator from '../../../utils/getComparator';
import stableSort from '../../../utils/stableSort';
import CheckBoxCell from './CheckBoxCell/CheckBoxCell';
import CellSwitcher from './CellSwitcher';
import { setRowSelected } from '../../../store/actions/selectAction';

// const StyledTableRow = withStyles((theme: Theme) =>
//     createStyles({
//       root: {
//         '&:nth-of-type(odd)': {
//           backgroundColor: theme.palette.background.default,
//         },
//       },
//     }),
// )(TableRow);]

const useStyles = makeStyles(() => ({
  tBody: prop => ({
    position: 'relative',
    display: 'inline-block',
    height: prop.styledTableHeight,
    maxHeight: prop.styledTableHeight,
    width: '100%',
  }),
}));

const TableGrid = ({ rows, columns, visibleColumns, order, orderBy, scroll, rowHeight, styledTableHeight, selected }) => {
  const styledProp = { styledTableHeight };
  const classes = useStyles(styledProp);
  const dispatch = useDispatch();
  const isSelected = name => selected.indexOf(name) !== -1;

  const sortedRow = stableSort(rows, getComparator(order, orderBy));

  const generateRows = () => {
    const styledRowHeight = rowHeight;
    const newRows = sortedRow;
    // eslint-disable-next-line react/prop-types
    let { index } = scroll;
    const items = [];

    do {
      if (index >= newRows.length) {
        index = newRows.length;
        break;
      }

      const isItemSelected = isSelected(newRows[index].id);

      const rowAttrs = {
        style: {
          position: 'absolute',
          top: index * styledRowHeight,
          left: 0,
          height: styledRowHeight,
          lineHeight: `${styledRowHeight}px`,
        },
        className: `tr ${index % 2 === 0 ? 'tr-odd' : 'tr-even'}`,
      };

      const selectedCell = newRows[index].id;
      items.push(
        <TableRow
          {...rowAttrs}
          key={`row #${index}`}
          hover
          onClick={() => dispatch(setRowSelected(selectedCell))}
          role="checkbox"
          aria-checked={isItemSelected}
          tabIndex={-1}
          selected={isItemSelected}
        >
          <CheckBoxCell isItemSelected={isItemSelected} />
          {columns.map((column, i) => {
            const value = newRows[index][column.id];
            return <CellSwitcher key={`cell #${column.id}`} visibleColumns={visibleColumns} column={column} value={value} index={i} />;
          })}
        </TableRow>
      );
      index += 1;
    } while (index < scroll.end);

    return items;
  };
  return (
    <>
      <TableBody className={classes.tBody}>{generateRows()}</TableBody>
    </>
  );
};

export default TableGrid;

TableGrid.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(Object).isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  scroll: PropTypes.shape({ top: PropTypes.number, index: PropTypes.number, end: PropTypes.number }).isRequired,
  rowHeight: PropTypes.number.isRequired,
  styledTableHeight: PropTypes.number.isRequired,
  selected: PropTypes.arrayOf(PropTypes.number).isRequired,
  visibleColumns: PropTypes.objectOf(PropTypes.bool).isRequired,
};
