import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0px;
  background-color: none;
  margin-top: 10px;
  text-align: center;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
`;

const PlayerWins = () =>
  <div>
    <h3>Wins</h3>
    <div>0</div>
  </div>
;

const Ties = () =>
  <div>
    <h3>Ties</h3>
    <div>0</div>
  </div>
;

const ComputerWins = () =>
  <div>
    <h3>Wins</h3>
    <div>0</div>
  </div>
;

const Scoreboards = () =>
  <Wrapper>
    <PlayerWins />
    <Ties />
    <ComputerWins />
  </Wrapper>
;

const DashBoard = () =>
  <div>
    <Scoreboards />
    <div>Current round</div>
    <div>Last moves</div>
  </div>
;

export default DashBoard;
