const columns = [
  { id: 'id', label: 'Id', disablePadding: true, width: 50, align: 'left' },
  { id: 'firstName', label: 'First name', width: 100, align: 'left' },
  {
    id: 'lastName',
    label: 'Last name',
    width: 100,
    align: 'left',
  },
  {
    id: 'address',
    label: 'Address',
    width: 170,
    align: 'left',
  },
  {
    id: 'ageCategory',
    label: 'Age',
    width: 50,
    align: 'left',
  },
  {
    id: 'salary',
    label: 'Salary',
    width: 50,
    align: 'left',
    format: value => value.toLocaleString(),
  },
  {
    id: 'distance',
    label: 'Distance',
    width: 100,
    align: 'left',
    format: value => value.toFixed(5),
  },
  {
    id: 'hackedDate',
    label: 'Hacked date',
    width: 100,
    align: 'center',
  },
  {
    id: 'status',
    label: 'Status',
    disablePadding: true,
    width: 50,
    align: 'center',
  },
];

export default columns;
