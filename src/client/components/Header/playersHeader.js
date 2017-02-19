import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  padding: 0.6em;
  background: red;
`;

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Header = ({ title }) =>
  <Wrapper>
    <Title>{title}</Title>
  </Wrapper>
;

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};


export default Header;
