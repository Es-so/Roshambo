import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 0.1em;
  background: whitesmoke;
`;

const Title = styled.h1`
  font-size: 2.0em;
  text-align: center;
  color: darkred;
`;

const Header = () =>
  <Wrapper>
    <Title>Roshambo</Title>
  </Wrapper>
;

export default Header;
