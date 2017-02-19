import React from 'react';
import styled from 'styled-components';
import shapes from '../../store/shapes';
import colors from '../../store/color';
import Header from '../Header/playersHeader';

const Shape = styled.i`
  text-align: center;
  cursor: pointer;
  margin: 0.2em;
`;

const Result = styled.div`
  text-align: center;
  font-size: 2.8em;
`;

const Wrapper = styled.div`
  text-align: center;
  font-size: 2.8em;
`;

const getRandomColor = () => colors[(Math.floor(Math.random() * 42) % colors.length)];

const shape = (shapeFont, id, selectShape, color) => <Shape key={id} style={{ color }} onClick={() => selectShape(shapeFont, '')} className={`fa fa-${shapeFont} fa-5x`} />;

const FinalShape = ({ color, shapeFont }) => <Shape style={{ color, cursor: 'initial', margin: '0px' }} className={`fa fa-${shapeFont} fa-5x`} />;

FinalShape.propTypes = {
  color: React.PropTypes.string.isRequired,
  shapeFont: React.PropTypes.string.isRequired,
};

const allShapes = selectShape => [
  shape(shapes.rock, 1, selectShape, getRandomColor()),
  shape(shapes.paper, 2, selectShape, getRandomColor()),
  shape(shapes.scissors, 3, selectShape, getRandomColor())];

const Shapes = ({ selectShape }) => <div>{allShapes(selectShape)}</div>;

Shapes.propTypes = {
  selectShape: React.PropTypes.func.isRequired,
};

const Player = ({ player, gameResult, selectShape }) =>
  <div style={{ flex: '1' }} >
    <Header title="HUMAN" />
    <Shapes selectShape={selectShape} />
    <Result>{gameResult}</Result>
    <Wrapper>
      <FinalShape color={getRandomColor()} shapeFont={player.shape} />
    </Wrapper>
  </div>
;

Player.propTypes = {
  player: React.PropTypes.object.isRequired,
  gameResult: React.PropTypes.string.isRequired,
  selectShape: React.PropTypes.func.isRequired,
};

export default Player;
