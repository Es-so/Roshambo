import { combineReducers } from 'redux';
import computer from './computer';
import player from './player';
import dashBoard from './dashboard';
import isLoading from './load';
import lastMoves from './lastmoves';

const reducers = combineReducers({
  player,
  computer,
  dashBoard,
  isLoading,
  lastMoves,
});

export default reducers;