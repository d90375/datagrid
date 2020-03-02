import React from 'react';
import styled from "styled-components";

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

const Header = () => {
  return <header>
      <h1>Data<span>Grid</span></h1>
      <span>story book</span>
  </header>;
};

export default Header;
