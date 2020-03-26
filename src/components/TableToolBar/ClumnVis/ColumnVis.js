import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formControl: {
    marginLeft: '5rem',
  },
}));

const ColumnVis = ({ visibleColumns, onChangeVisible }) => {
  const classes = useStyles();

  const { isAge, isSalary, isDistance, isHackedData, isStatus } = visibleColumns;

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox color="primary" checked={isAge} onChange={onChangeVisible('isAge')} value="age" />}
          label="age"
        />

        <FormControlLabel
          control={<Checkbox color="primary" checked={isSalary} onChange={onChangeVisible('isSalary')} value="salary" />}
          label="salary"
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked={isDistance} onChange={onChangeVisible('isDistance')} value="distance" />}
          label="distance"
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked={isHackedData} onChange={onChangeVisible('isHackedData')} value="hacked data" />}
          label="hacked data"
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked={isStatus} onChange={onChangeVisible('isStatus')} value="status" />}
          label="status"
        />
      </FormGroup>
    </FormControl>
  );
};

export default ColumnVis;

ColumnVis.propTypes = {
  visibleColumns: PropTypes.objectOf(PropTypes.bool).isRequired,
  onChangeVisible: PropTypes.func.isRequired,
};
