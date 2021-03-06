import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setVirt } from '../../../../store/actions/switch';

const useStyles = makeStyles({
  control: {
    color: '#FFF',
    alignSelf: 'flex-start',
    marginRight: '1rem',
    marginTop: '.5rem',
  },
});

const VirtualizeLabel = () => {
  const dispatch = useDispatch();
  const virt = useSelector(state => state.switchReducer);

  const handleChangeVirt = event => {
    dispatch(setVirt(event.target.checked));
  };

  const classes = useStyles();
  return (
    <>
      <FormControlLabel className={classes.control} control={<Switch color="primary" checked={virt} onChange={handleChangeVirt} />} label="Virtualize" />
    </>
  );
};

export default VirtualizeLabel;
