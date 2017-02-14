import React from 'react';
import styled from 'styled-components';
import shapes from '../../store/shapes';

const Wrapper = styled.section`
  padding: 0.1em;
  width: 100%;
  background: red;
`;

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Shape = styled.i`
  text-align: center;
  cursor: pointer;
  margin: 0.2em;
`;

const Result = styled.div`
  text-align: center;
  font-size: 2.8em;
  margin: 0.5em;
`;

const FinalShape = styled.div`
  text-align: center;
  font-size: 2.8em;
  margin: 0.5em;
`;

const Header = () =>
  <Wrapper>
    <Title>HUMAN</Title>
  </Wrapper>
;

const shape = (shapeFont, id) => <Shape key={id} className={`fa fa-${shapeFont} fa-5x`} />;

const allShapes = [shape(shapes.rock, 1), shape(shapes.paper, 2), shape(shapes.scissors, 3)];

const Shapes = () => <div>{allShapes}</div>;

const Player = ({ player, gameResult }) =>
  <div>
    <Header />
    <Shapes />
    <Result>{gameResult}</Result>
    <FinalShape>Choice</FinalShape>
  </div>
;

export default Player;
