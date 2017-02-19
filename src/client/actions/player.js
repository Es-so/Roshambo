import { loadComputerShape } from './computer';

export const SHAPE_SELECTED = 'player/shapeSelected';

const shapeSelected = (shape, color) => ({
  type: SHAPE_SELECTED,
  shape,
  color,
});

const selectShape = (shape, color) => (dispatch) => {
  dispatch(shapeSelected(shape, color));
  dispatch(loadComputerShape(shape));
};

export default {
  shapeSelected,
  selectShape,
};
