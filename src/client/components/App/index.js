import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActions from '../../actions';
import Player from '../player';
import DashBoard from '../dashboard';
import Computer from '../computer';
import Header from '../Header';

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

const Content = ({ state, actions }) => {
  const { player, computer, dashBoard, currentLoad } = state;
  const { gameResult } = dashBoard;
  const { selectShape } = actions;
  return (
    <Wrapper>
      <Player player={player} gameResult={gameResult} selectShape={selectShape} />
      <DashBoard dashBoard={dashBoard} />
      <Computer computer={computer} currentLoad={currentLoad} />
    </Wrapper>
  );
};

Content.propTypes = {
  state: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

const App = ({ player, computer, dashBoard, currentLoad, actions }) => {
  const state = { player, computer, dashBoard, currentLoad };
  return (
    <div>
      <Header />
      <Content state={state} actions={actions} />
    </div>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(allActions, dispatch),
});

App.propTypes = {
  actions: React.PropTypes.object.isRequired,
  player: React.PropTypes.object.isRequired,
  computer: React.PropTypes.object.isRequired,
  dashBoard: React.PropTypes.object.isRequired,
  currentLoad: React.PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
