import R from 'ramda';
import {
  DASHBOARD_UPDATED,
} from '../actions/dashboard';

const updateDashBoard = (state, action) => {
  const nineLastRound = R.take(9, state.lastMoves);
  const {
    playerWin,
    computerWin,
    tie,
    gameResult,
    lastMove,
  } = action;
  const newState = {
    playerWins: state.playerWins + playerWin,
    computerWins: state.computerWins + computerWin,
    tie: state.tie + tie,
    round: state.round + 1,
    gameResult,
    lastMoves: [lastMove, ...nineLastRound],
  };
  return newState;
};

const dashBoard = (state = {}, action) => {
  switch (action.type) {
    case DASHBOARD_UPDATED:
      return (updateDashBoard(state, action));
    default:
      return state;
  }
};

export default dashBoard;
