import { combineReducers } from 'redux';
import computer from './computer';
import player from './player';
import dashBoard from './dashboard';
import currentLoad from './load';

const reducers = combineReducers({
  player,
  computer,
  dashBoard,
  currentLoad,
});

export default reducers;
