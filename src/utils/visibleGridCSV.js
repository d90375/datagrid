export default function visibleGridCSV(columns, label) {
  const { isAge, isSalary, isDistance, isHackedData, isStatus } = columns;
  let str = `${label.id}, ${label.firstName}, ${label.lastName} ,${label.address.state}/${label.address.city}`;
  if (isAge) {
    str += `, ${label.ageCategory}`;
  }
  if (isSalary) {
    str += `, ${label.salary}`;
  }
  if (isDistance) {
    str += `, ${label.distance}`;
  }
  if (isHackedData) {
    str += `, ${label.hackedDate}`;
  }
  if (isStatus) {
    str += `, ${label.status}`;
  }
  return str;
}
