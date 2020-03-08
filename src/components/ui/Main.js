import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import data from '../../config/data/hackerData';

import MainTable from '../MainTable/MainTable';
import TableNav from '../MainTable/TableNav/TableNav';
import PreLoader from './PreLoader/PreLoader';

// ISO\u00a0Code
// Size\u00a0(km\u00b2)

const columns = [
  { id: 'id', label: 'id', disablePadding: true, minWidth: 50 },
  { id: 'firstName', label: 'first name', minWidth: 100 },
  {
    id: 'lastName',
    label: 'last name',
    minWidth: 100,
    align: 'center',
  },
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

const Main = () => {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function load() {
      let id = 0;
      data.map(item => {
        id += 1;
        // eslint-disable-next-line no-param-reassign
        item.id = id;
        return item.id;
      });
      setRows(data);
      setTimeout(() => {
        setIsLoading(true);
      }, 2000);
    })();
  }, []);

  return (
    <main>
      <Paper elevation={4}>
        <TableNav />
        {isLoading ? <MainTable rows={rows} columns={columns} /> : <PreLoader />}
      </Paper>
    </main>
  );
};

export default Main;
