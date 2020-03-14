import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import { makeStyles } from '@material-ui/core/styles';

import getComparator from './helpers/getComparator';
import stableSort from './helpers/stableSort';
import CheckBoxCell from './CheckBoxCell/CheckBoxCell';
import CellSwitcher from './CellSwitcher';

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
    height: prop.tableHeight,
    maxHeight: prop.tableHeight,
    width: '100%',
  }),
}));

const TableGrid = ({ OldRows, columns, order, orderBy, emptyRows, OldRowHeight, scroll, tableHeight }) => {
  const styledProp = { tableHeight };
  const classes = useStyles(styledProp);

  const sortedRow = stableSort(OldRows, getComparator(order, orderBy));

  const generateRows = () => {
    const rowHeight = OldRowHeight;
    const rows = sortedRow;
    let { index } = scroll;
    const items = [];

    do {
      if (index >= rows.length) {
        index = rows.length;
        break;
      }

      const isItemSelected = isSelected(rows[index].id);

      const rowAttrs = {
        style: {
          position: 'absolute',
          top: index * rowHeight,
          left: 0,
          height: rowHeight,
          lineHeight: `${rowHeight}px`,
        },
        className: `tr ${index % 2 === 0 ? 'tr-odd' : 'tr-even'}`,
      };
      console.log(rows[index].id);
      items.push(
        <TableRow
          {...rowAttrs}
          hover
          onClick={event => handleClick(event, rows[index].id)}
          role="checkbox"
          aria-checked={isItemSelected}
          tabIndex={-1}
          selected={isItemSelected}
        >
          <CheckBoxCell isItemSelected={isItemSelected} />
          {columns.map((column, i) => {
            const value = rows[index][column.id];
            return (
              <TableCell padding={column.disablePadding ? 'none' : 'default'} key={column.id} align={column.align}>
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
