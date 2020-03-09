const cellSwitcher = ({ column, value, index }) => {
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
      result = value ? 'true' : 'false';
      break;
    default:
      result = value;
  }
  return result;
};
export default cellSwitcher;
