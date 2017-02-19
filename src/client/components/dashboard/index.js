import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0px;
  background-color: none;
  text-align: center;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
  border: 1px solid darkgrey;
`;

const Shape = styled.i`
  text-align: center;
  cursor: pointer;
  margin: 0.2em;
`;

const scoreSnippet = (title, score, index) =>
  <div key={index} >
    <h3>{title}</h3>
    <div>{score}</div>
  </div>
;

const Scoreboard = ({ dashBoard }) =>
  <Wrapper>
    {
    [
      scoreSnippet('Wins', dashBoard.playerWins, 1),
      scoreSnippet('Tie', dashBoard.tie, 2),
      scoreSnippet('Wins', dashBoard.computerWins, 3),
    ]
    }
  </Wrapper>
;

Scoreboard.propTypes = {
  dashBoard: React.PropTypes.object.isRequired,
};

const shape = (shapeFont, color, index) =>
  <Shape style={{ color }} key={index} className={`fa fa-${shapeFont} fa-2x`} />
;

const LastMoves = ({ lastMoves }) =>
  <ul style={{ padding: '0px' }} >
    {
      lastMoves.map((lastMove, index) =>
        <li style={{ listStyle: 'none', borderTop: '1px solid darkgrey' }} key={index} >
          {
          [
            shape(lastMove.playerMove.shape, lastMove.playerMove.color, index),
            'Round ',
            lastMove.round,
            shape(lastMove.computerMove.shape, lastMove.computerMove.color, (index + 1)),
          ]
          }
        </li>)
    }
  </ul>
;

LastMoves.propTypes = {
  lastMoves: React.PropTypes.array.isRequired,
};

const DashBoard = ({ dashBoard }) =>
  <div style={{ flex: '1' }} >
    <Scoreboard dashBoard={dashBoard} />
    <h2 style={{ marginTop: '4px' }} >Round {dashBoard.round + 1} </h2>
    <LastMoves lastMoves={dashBoard.lastMoves} />
  </div>
;

DashBoard.propTypes = {
  dashBoard: React.PropTypes.object.isRequired,
};

export default DashBoard;
