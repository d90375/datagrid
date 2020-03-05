import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MainTable from '../MainTable/MainTable';
import data from '../../config/data/hackerData';
import { Row, Column } from '../../interfaces/interfaces';

// ISO\u00a0Code
// Size\u00a0(km\u00b2)

const columns: Column[] = [
  { id: 'id', label: 'id', minWidth: 50 },
  { id: 'firstName', label: 'first name', minWidth: 100 },
  {
    id: 'lastName',
    label: 'last name',
    minWidth: 80,
    align: 'right',
  },
  // {
  //   id: 'address',
  //   label: 'address',
  //   minWidth: 170,
  //   align: 'right',
  // },
  {
    id: 'status',
    label: 'status',
    minWidth: 170,
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
    format: (value: number) => value.toLocaleString(),
  },
  {
    id: 'distance',
    label: 'distance',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toFixed(5),
  },
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

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  topBackGround: {
    borderTopLeftRadius: '.4rem',
    borderTopRightRadius: '.4rem',
    height: '150px',
    // backgroundColor: 'rgb(70, 74, 148)',
    background: 'linear-gradient(90deg, rgba(70, 74, 148, 1) 5%, rgba(126, 83, 180, 1) 81%, rgba(115, 82, 173, 1) 100%)',
  },
});

const Main: React.FC = () => {
  const classes = useStyles();

  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    (async function load() {
      setRows(data);
    })();
  }, []);

  return (
    <main>
      <Paper elevation={4}>
        <div className={classes.topBackGround} />
        <MainTable rows={rows} columns={columns} />
      </Paper>
    </main>
  );
};

export default Main;
