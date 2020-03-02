import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from './styleguide/theme';

import logo from './logo.svg';
import './App.css';
import Header from './containers/ui/Header';
import Main from './containers/ui/Main';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.space.M}px;
  margin: ${({ theme }) => theme.space.M}px;
  width: 200px;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Main />
      <Button>Ku-ku</Button>
    </ThemeProvider>
  );
};

export default App;
