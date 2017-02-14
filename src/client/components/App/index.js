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
  const { player, computer, dashBoard, isLoading } = state;
  const { gameResult } = dashBoard;
  return (
    <Wrapper>
      <Player player={player} gameResult={gameResult} />
      <DashBoard dashBoard={dashBoard} />
      <Computer computer={computer} />
    </Wrapper>
  );
};

Content.propTypes = {
  state: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

const App = ({ player, computer, dashBoard, isLoading, actions }) => {
  const state = { player, computer, dashBoard, isLoading };
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
  isLoading: React.PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
