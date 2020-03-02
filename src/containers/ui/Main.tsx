import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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

const Main = () => {
  return (
    <main>
      <Wrapper></Wrapper>
    </main>
  );
};

export default Main;
