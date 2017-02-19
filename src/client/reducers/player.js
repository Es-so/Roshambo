import {
  SHAPE_SELECTED,
} from '../actions/player';

const selectShape = (state, action) => {
  const { shape, color } = action;
  const newState = { shape, color };
  return newState;
};

const player = (state = {}, action) => {
  switch (action.type) {
    case SHAPE_SELECTED:
      return selectShape(state, action);
    default:
      return state;
  }
};

export default player;
