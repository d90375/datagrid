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

const ColumnVis = () => {
  const classes = useStyles();

  const isStatus = true;
  const handleChange = () => {};

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormGroup row>
        <FormControlLabel control={<Checkbox color="primary" checked={isStatus} onChange={handleChange('')} value="age" />} label="age" />

        <FormControlLabel
          control={<Checkbox color="primary" checked={isStatus} onChange={handleChange('')} value="salary" />}
          label="salary"
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked={isStatus} onChange={handleChange('')} value="distance" />}
          label="distance"
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked={isStatus} onChange={handleChange('')} value="hacked data" />}
          label="hacked data"
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked={isStatus} onChange={handleChange('')} value="status" />}
          label="status"
        />
      </FormGroup>
    </FormControl>
  );
};

export default ColumnVis;

ColumnVis.propTypes = {};


