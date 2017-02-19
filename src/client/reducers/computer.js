import {
  SHAPE_LOADED,
} from '../actions/computer';

const loadComputerShape = (state, action) => {
  const { shape, color } = action;
  const newState = { shape, color };
  return newState;
};

const computer = (state = {}, action) => {
  switch (action.type) {
    case SHAPE_LOADED:
      return loadComputerShape(state, action);
    default:
      return state;
  }
};

export default computer;
