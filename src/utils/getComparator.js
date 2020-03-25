function descendingComparator(a, b, orderBy) {
  if (orderBy === 'address') {
    if (b[orderBy][0].state < a[orderBy][0].state) {
      return -1;
    }
    if (b[orderBy][0].state > a[orderBy][0].state) {
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
