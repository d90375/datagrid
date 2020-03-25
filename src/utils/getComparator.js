function descendingComparator(a, b, orderBy) {
  if (orderBy === 'address') {
    if (b[orderBy].state < a[orderBy].state) {
      return -1;
    }
    if (b[orderBy].state > a[orderBy].state) {
      return 1;
    }
    return 0;
  }

  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

export default getComparator;
