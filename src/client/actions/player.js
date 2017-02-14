export const SHAPE_SELECTED = 'player/shapeSelected';

const shapeSelected = move => ({
  type: SHAPE_SELECTED,
  icon: move,
});

export const selectShape = move => (dispatch) => {
  dispatch(shapeSelected(move));
};

export default {
  shapeSelected,
};
