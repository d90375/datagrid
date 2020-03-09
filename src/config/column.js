const columns = [
  { id: 'id', label: 'Id', disablePadding: true, minWidth: 50, align: 'left' },
  { id: 'firstName', label: 'First name', minWidth: 100, align: 'left' },
  {
    id: 'lastName',
    label: 'Last name',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'ageCategory',
    label: 'Age',
    minWidth: 50,
    align: 'left',
  },
  {
    id: 'salary',
    label: 'Salary',
    minWidth: 50,
    align: 'left',
    format: value => value.toLocaleString(),
  },
  {
    id: 'distance',
    label: 'Distance',
    minWidth: 100,
    align: 'left',
    format: value => value.toFixed(5),
  },
  {
    id: 'hackedDate',
    label: 'Hacked date',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 50,
    align: 'center',
  },
];

export default columns;
