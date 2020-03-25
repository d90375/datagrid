import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import { ageCategory } from '../../../constants';

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '2rem',
    '& .MuiInput-root': {
      color: '#FFF',
    },
  },
  formControl: {
    minWidth: 195,
  },
  selectEmpty: {},
  icon: {
    color: '#FFF',
  },
  teg: {
    color: '#FFF',
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const EnumFilter = ({ onChangeEnum, selectedEnumList }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <FindReplaceIcon className={classes.icon} />
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.teg} id="checkbox-label">
              Age Category
            </InputLabel>
            <Select
              labelId="checkbox-label"
              id="checkbox"
              multiple
              value={selectedEnumList}
              onChange={onChangeEnum}
              input={<Input />}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {ageCategory.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={selectedEnumList.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default EnumFilter;

EnumFilter.propTypes = {
  onChangeEnum: PropTypes.func.isRequired,
  selectedEnumList: PropTypes.arrayOf(PropTypes.number).isRequired,
};
