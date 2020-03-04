import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TableHeader from '../TableHeader/TableHeader';

interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString(),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString(),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(name: string, code: string, population: number, size: number): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
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
// )(TableRow);

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    borderRadius: '.4rem',
  },
  paper: {
    // overflow: 'scroll',
    marginLeft: '2rem',
    marginRight: '2rem',
    marginTop: '-2rem',
    '&.MuiTableContainer-root': {
      width: 'auto',
    },
  },
  topBackGround: {
    borderTopLeftRadius: '.4rem',
    borderTopRightRadius: '.4rem',
    height: '150px',
    // backgroundColor: 'rgb(70, 74, 148)',
    background: 'linear-gradient(90deg, rgba(70, 74, 148, 1) 5%, rgba(126, 83, 180, 1) 81%, rgba(115, 82, 173, 1) 100%)',
  },
  main: {
    backgroundColor: '#fff',
    borderRadius: '.4rem',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,.25)',
    marginBottom: '4rem',
    minHeight: '500px',
  },
  control: {
    margin: '.5rem 0  .5rem  2rem ',
  },
});

const Main = () => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  return (
    <main>
      <Paper elevation={4}>
        <div className={classes.topBackGround} />
        <Paper elevation={3} className={classes.paper}>
          <TableContainer className={classes.container}>
            <Table size={dense ? 'small' : 'medium'} stickyHeader aria-label="data grid">
              <TableHeader columns={columns} />
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow style={{ height: dense ? 33 : 53 }} hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <FormControlLabel className={classes.control} control={<Switch checked={dense} onChange={handleChangeDense} />} label="Magic" />
      </Paper>
    </main>
  );
};

export default Main;
