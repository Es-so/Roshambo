import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store';

const initialState = {
  player: {},
  computer: {},
  dashBoard: {
    playerWins: 0,
    computerWins: 0,
    tie: 0,
    round: 0,
    gameResult: "win",
    lastMoves: [],
  },
  isLoading: false,
};

const store = configureStore(initialState);
window.store = store;

console.log('mounting react app ...');  // eslint-disable-line no-console

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('__ROSHAMBO__')
 );
