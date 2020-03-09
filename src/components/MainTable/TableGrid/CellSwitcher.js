import React from 'react';
import DotActive from '../../TableToolBar/BooleanTool/DotActive';
import DotDisable from '../../TableToolBar/BooleanTool/DotDisable';

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

const CellSwitcher = ({ column, value, index }) => {
  return <>{getResult(column, value, index)}</>;
};
export default CellSwitcher;
