import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import data from '../../config/data/hackerData';

import MainTable from '../MainTable/MainTable';
import TableNav from '../MainTable/TableNav/TableNav';

import { Row, Column } from '../../interfaces/interfaces';

// ISO\u00a0Code
// Size\u00a0(km\u00b2)

const columns: Column[] = [
  { id: 'id', label: 'id', disablePadding: true, minWidth: 50 },
  // { id: 'firstName', label: 'first name', minWidth: 100 },
  { id: 'id', label: 'id', disablePadding: true, minWidth: 50 },
  // {
  //   id: 'lastName',
  //   label: 'last name',
  //   minWidth: 80,
  //   align: 'right',
  // },
  // {
  //   id: 'address',
  //   label: 'address',
  //   minWidth: 170,
  //   align: 'right',
  // },
  // {
  //   id: 'ageCategory',
  //   label: 'age category',
  //   minWidth: 170,
  //   align: 'right',
  // },
  // {
  //   id: 'salary',
  //   label: 'salary',
  //   minWidth: 170,
  //   align: 'center',
  //   format: (value: number) => value.toLocaleString(),
  // },
  // {
  //   id: 'distance',
  //   label: 'distance',
  //   minWidth: 170,
  //   align: 'center',
  //   format: (value: number) => value.toFixed(5),
  // },
  // {
  //   id: 'hackedDate',
  //   label: 'hacked date',
  //   minWidth: 170,
  //   align: 'right',
  // },
];

//
// const StyledTableRow = withStyles((theme: Theme) =>
//     createStyles({
//       root: {
//         '&:nth-of-type(odd)': {
//           backgroundColor: theme.palette.background.default,
//         },
//       },
//     }),
// )(TableRow);]

const Main: React.FC = () => {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    (async function load() {
      setRows(data);
    })();
  }, []);

  return (
    <main>
      <Paper elevation={4}>
        <TableNav />
        <MainTable rows={rows} columns={columns} />
      </Paper>
    </main>
  );
};

export default Main;
