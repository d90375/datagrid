import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const SaveCSV = () => {
  return (
    <>
      <Button variant="outlined" color="secondary" startIcon={<SaveIcon />}>
        CSV
      </Button>
    </>
  );
};

export default SaveCSV;
