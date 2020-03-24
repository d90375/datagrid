import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import { useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

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
  cell: {
    display: 'block',
    maxWidth: '90px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  tBody: prop => ({
    position: 'relative',
    display: 'inline-block',
    height: prop.styledTableHeight,
    maxHeight: prop.styledTableHeight,
    width: '100%',
  }),
}));

const TableGrid = ({ rows, columns, order, orderBy, scroll, rowHeight, styledTableHeight,selected }) => {
  const styledProp = { styledTableHeight };
  const classes = useStyles(styledProp);
  const dispatch = useDispatch()
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
            return (
              <TableCell padding={column.disablePadding ? 'none' : 'default'} style={{ minWidth: column.width }} key={column.id} align={column.align}>
                <span className={classes.cell}>
                  <CellSwitcher column={column} value={value} index={i} />
                </span>
              </TableCell>
            );
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
