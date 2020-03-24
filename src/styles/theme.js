import { createMuiTheme } from '@material-ui/core';

const breakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: '.4rem',
      },
    },
  },
  palette: {
    common: {
      black: '#000e1a',
    },
    primary: {
      light: '#757ce8',
      main: '#5659A3',
      dark: '#7A54B3',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#464A94',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background: {
      default: '#f7f6f9',
    },
  },
  custom: {
    color: {
      primary: '#5659A3',
      warning: '#faad14',
      error: '#EE7490',
      heading: '#464A94',
      heading2: '#7A54B3',
      text: '#8B8BBC',
      text2: '#7D7DB7',
      disabled: '#EE7490',
      active: '#30D9B9',
      success: '#43DEC1',
      border: '#423EA2',
      black: '#000e1a',
      white: '#fff',
      gray: '#F7F6F9',
      gray2: '#333333',
      link: '#7D7DB7',
    },
  },
  breakpoints: { values: breakpointValues },
});

export default theme;
