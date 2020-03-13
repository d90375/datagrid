import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import { makeStyles } from '@material-ui/core/styles';

import getComparator from './helpers/getComparator';
import stableSort from './helpers/stableSort';
import CheckBoxCell from './CheckBoxCell/CheckBoxCell';
import CellSwitcher from './CellSwitcher';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//   },
//   paper: {
//     width: '100%',
//     marginBottom: theme.spacing(2),
//   },
//   table: {
//     minWidth: 750,
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: 'rect(0 0 0 0)',
//     height: 1,
//     margin: -1,
//     overflow: 'hidden',
//     padding: 0,
//     position: 'absolute',
//     top: 20,
//     width: 1,
//   },
// }));

const useStyles = makeStyles(theme => ({
  // root: {
  //   width: '100%',
  // },
  // paper: {
  //   width: '100%',
  //   marginBottom: theme.spacing(2),
  // },
  // table: {
  //   minWidth: 750,
  // },
  // visuallyHidden: {
  //   border: 0,
  //   clip: 'rect(0 0 0 0)',
  //   height: 1,
  //   margin: -1,
  //   overflow: 'hidden',
  //   padding: 0,
  //   position: 'absolute',
  //   top: 20,
  //   width: 1,
  // },
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

const TableGrid = ({ rows, columns, order, orderBy, isSelected, handleClick, dense, emptyRows, OldRowHeight, scroll, tableHeight }) => {
  const prop = { tableHeight };
  const classes = useStyles(prop);

  // const generateRows = () => {
  //   const rowHeight = OldRowHeight;
  //   let { index } = scroll;
  //   const items = [];
  //
  //   do {
  //     if (index >= rows.length) {
  //       index = rows.length;
  //       break;
  //     }
  //
  //     const rowAttrs = {
  //       style: {
  //         position: 'absolute',
  //         top: index * rowHeight,
  //         left: 0,
  //         height: rowHeight,
  //         lineHeight: `${rowHeight}px`,
  //       },
  //       className: `tr ${index % 2 === 0 ? 'tr-odd' : 'tr-even'}`,
  //     };
  //     items.push(
  //
  //     index = +1;
  //   } while (index < scroll.end);
  //
  //   return items;
  // };

  return (
    <>
      <TableBody className={classes.tBody}>
        {/*{generateRows()}*/}
        {stableSort(rows, getComparator(order, orderBy)).map(row => {
          const isItemSelected = isSelected(row.id);
          return (
            <TableRow
              hover
              onClick={event => handleClick(event, row.id)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.id}
              selected={isItemSelected}
            >
              <CheckBoxCell isItemSelected={isItemSelected} />
              {columns.map((column, index) => {
                const value = row[column.id];
                return (
                  <TableCell padding={column.disablePadding ? 'none' : 'default'} key={column.id} align={column.align}>
                    <span className={classes.cell}>
                      <CellSwitcher column={column} value={value} index={index} />
                    </span>
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}

        {emptyRows > 0 && (
          <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
    </>
  );
};

export default TableGrid;
