import React from 'react';

import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './components/ui/Header';
import Main from './components/ui/Main';

import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <CssBaseline />
        <Header />
        <Main />
      </Container>
    </ThemeProvider>
  );
};

export default App;
