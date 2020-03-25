export default function visibleHeaderCSV(columns) {
  const { isAge, isSalary, isDistance, isHackedData, isStatus } = columns;
  let str = 'id, first name, last name, address';
  if (isAge) {
    str += ', age';
  }
  if (isSalary) {
    str += ', salary';
  }
  if (isDistance) {
    str += ', distance';
  }
  if (isHackedData) {
    str += ', hacked date';
  }
  if (isStatus) {
    str += ', status';
  }
  return str;
}
