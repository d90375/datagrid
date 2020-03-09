import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Search = ({ onSearch }) => {
  const [value, setValue] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  const valueChangeHandler = event => {
    setValue(event.target.value);
  };

  const keyPressHandler = event => {
    if (event.keyCode === 13) {
      setValue(event.target.value);
      onSearch(value);
    }
  };

  // const keyPressHandler = event => {
  //   if (event.key === 'Enter') {
  //     console.log('Enter key pressed');
  //   }
  // };

  return (
    <>
      <div>
        <Button onClick={() => onSearch(value)} component="span" variant="outlined">
          Search
        </Button>
        <TextField
          id="filled-helperText"
          label="Search field"
          variant="outlined"
          onKeyDown={keyPressHandler}
          onChange={valueChangeHandler}
          value={value}
        />
      </div>
    </>
  );
};

export default Search;
