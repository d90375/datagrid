import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TableHeader from './TableHeader/TableHeader';
import ControlLabel from './ControlLabel/ControlLabel';
import { Column, Row } from '../../interfaces/interfaces';
import TableGrid from './TableGrid/TableGrid';

interface PropTypes {
  columns: Column[];
  rows: Row[];
}

const useStyles = makeStyles({
  container: {
    borderRadius: '.4rem',
    maxHeight: '587px',
    // ' &.--hidden ': {
    //   height: 0,
    //   overflow: 'hidden',
    // },
  },
  paper: {
    marginLeft: '2rem',
    marginRight: '2rem',
    marginTop: '-2rem',
    '&.MuiTableContainer-root': {
      width: 'auto',
    },
  },
});

const MainTable = ({ columns, rows }: PropTypes) => {
  const classes = useStyles();

  const [dense, setDense] = React.useState(false);

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <TableContainer className={classes.container}>
          <Table size={dense ? 'small' : 'medium'} stickyHeader aria-label="data grid">
            <TableHeader columns={columns} />
            <TableGrid dense={dense} rows={rows} columns={columns} />
          </Table>
        </TableContainer>
      </Paper>
      <ControlLabel handleChangeDense={handleChangeDense} dense={dense} />
    </>
  );
};

export default MainTable;
