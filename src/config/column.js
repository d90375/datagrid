const columns = [
  { id: 'id', label: 'id', disablePadding: true, minWidth: 50 },
  { id: 'firstName', label: 'first name', minWidth: 100 },
  {
    id: 'lastName',
    label: 'last name',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'address',
    label: 'address',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'status',
    label: 'status',
    minWidth: 50,
    align: 'right',
  },
  {
    id: 'ageCategory',
    label: 'age category',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'salary',
    label: 'salary',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'distance',
    label: 'distance',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(5),
  },
  {
    id: 'hackedDate',
    label: 'hacked date',
    minWidth: 170,
    align: 'right',
  },
];

export default columns;
