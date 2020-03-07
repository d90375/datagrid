import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Checkbox from '@material-ui/core/Checkbox';

import getComparator from './helpers/getComparator';
import stableSort from './helpers/stableSort';

import { Column, Row, Order } from '../../../interfaces/interfaces';

interface PropTypes {
  columns: Column[];
  rows: Row[];
  dense: boolean;
  order: Order;
  orderBy: string;
  page: number;
  rowsPerPage: number;
  isSelected: (name: string) => boolean;
  handleClick: (event: React.MouseEvent<unknown>, name: string) => void;
}

const TableGrid = ({ rows, columns, dense, order, orderBy, page, rowsPerPage, isSelected, handleClick }: PropTypes) => {
  return (
    <>

    </>
  );
};

export default TableGrid;
