import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formControl: {},
}));

const ColumnVis = ({ columns: { isEmailOn, isChangeDateOn, isScoreOn, isSizeOn, isMarriedOn, handleChange } }) => {
  const classes = useStyles();


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
