import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formControl: {
    marginLeft: '4rem',
  },
}));

const ColumnVis = () => {
  const classes = useStyles();

  const isStatus = true;
  const handleChange = () => {};

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox color="primary" checked={isStatus} onChange={handleChange('')} value="status" />}
          label="status"
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked={isStatus} onChange={handleChange('')} value="status" />}
          label="status"
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked={isStatus} onChange={handleChange('')} value="status" />}
          label="status"
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked={isStatus} onChange={handleChange('')} value="status" />}
          label="status"
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

ColumnVis.propTypes = {
  columns: PropTypes.shape({
    isEmailOn: PropTypes.bool,
    isChangeDateOn: PropTypes.bool,
    isScoreOn: PropTypes.bool,
    isSizeOn: PropTypes.bool,
    isMarriedOn: PropTypes.bool,
    handleChange: PropTypes.func,
  }).isRequired,
};

// return (
//     <>
//         <FormControl className={classes.formControl}>
//             <InputLabel id="demo-simple-select-label">Age</InputLabel>
//             <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange}>
//                 <MenuItem value={10}>Kid</MenuItem>
//                 <MenuItem value={20}>Young</MenuItem>
//                 <MenuItem value={30}>Adult</MenuItem>
//                 <MenuItem value={40}>Sage</MenuItem>
//                 <MenuItem value={50}>Pension</MenuItem>
//                 <MenuItem value={60}>Old</MenuItem>
//             </Select>
//         </FormControl>
//     </>
// );

// formControl: {
//     margin: theme.spacing(1),
//         minWidth: 120,
// },
// selectEmpty: {
//     marginTop: theme.spacing(2),
// },
