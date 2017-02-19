export const DASHBOARD_UPDATED = 'dashBoard/dashBoardUpdated';

const ROCK = 'hand-rock-o';
const PAPER = 'hand-paper-o';
const SCISSORS = 'hand-scissors-o';

const LOOSE = 0;
const WIN = 1;
const TIE = 2;

let round = 0;

const verdictWord = ['LOOSE', 'WIN', 'TIE'];
const playerVerdictColor = ['red', 'green', 'orange'];
const computerVerdictColor = ['green', 'red', 'orange'];

const comparePlayersMove = (playerShape, computerShape) => {
  if (playerShape === computerShape) return 2;
  switch (playerShape) {
    case ROCK:
      return Number(computerShape === SCISSORS);
    case PAPER:
      return Number(computerShape === ROCK);
    case SCISSORS:
      return Number(computerShape === PAPER);
    default:
      return 2;
  }
};

const dashBoardUpdated = (verdict, playerShape, computerShape) => ({
  type: DASHBOARD_UPDATED,
  playerWin: Number(verdict === WIN),
  computerWin: Number(verdict === LOOSE),
  tie: Number(verdict === TIE),
  gameResult: verdictWord[verdict],
  lastMove: {
    round: (round += 1),
    playerMove: {
      shape: playerShape,
      color: playerVerdictColor[verdict],
    },
    computerMove: {
      shape: computerShape,
      color: computerVerdictColor[verdict],
    },
  },
});

export const compareAndUpdate = (playerShape, computerShape) => (dispatch) => {
  const verdict = comparePlayersMove(playerShape, computerShape);
  dispatch(dashBoardUpdated(verdict, playerShape, computerShape));
};

export default {
  compareAndUpdate,
};
