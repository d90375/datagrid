import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from './styleguide/theme';

import logo from './logo.svg';
import './App.css';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, numquam!</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Button>Ku-ku</Button>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
