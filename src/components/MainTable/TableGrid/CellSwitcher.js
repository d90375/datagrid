import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DotActive from '../../TableToolBar/BooleanTool/DotActive';
import DotDisable from '../../TableToolBar/BooleanTool/DotDisable';

const useStyles = makeStyles(() => ({
  cell: {
    display: 'block',
    maxWidth: '120px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

const getResult = (column, value, index) => {
  let result;
  switch (index) {
    case 3:
      result = value.map(e => `${e.state}/${e.city}`);
      break;
    case 5:
      result = column.format(value);
      break;
    case 6:
      result = column.format(value);
      break;
    case 7:
      result = value.split('T').join(' ');
      break;
    case 8:
      result = value ? <DotActive /> : <DotDisable />;
      break;
    default:
      result = value;
  }
  return result;
};

const CellSwitcher = ({ column, value, index, visibleColumns: { isAge, isSalary, isDistance, isHackedData, isStatus } }) => {
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
      {visibleColumns[column.id] && (
        <TableCell padding={column.disablePadding ? 'none' : 'default'} style={{ minWidth: column.width }} align={column.align}>
          <span className={classes.cell}>{getResult(column, value, index)}</span>
        </TableCell>
      )}
    </>
  );
};
export default CellSwitcher;

CellSwitcher.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    disablePadding: PropTypes.bool,
    width: PropTypes.number,
    align: PropTypes.string,
    format: PropTypes.func,
  }).isRequired,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.array]).isRequired,
  index: PropTypes.number.isRequired,
  visibleColumns: PropTypes.objectOf(PropTypes.bool).isRequired,
};
