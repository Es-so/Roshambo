import requestJson from '../requests';
import { compareAndUpdate } from './dashboard';
import { addLoading, delLoading } from './load';

export const SHAPE_LOADED = 'computer/shapeLoaded';

const iconName = icon => `hand-${icon}-o`;

export const shapeLoaded = ({ icon, color }) => ({
  type: SHAPE_LOADED,
  shape: iconName(icon),
  color,
});

export const loadComputerShape = playerShape => (dispatch) => {
  dispatch(addLoading());
  requestJson().then((move) => {
    dispatch(shapeLoaded(move));
    dispatch(compareAndUpdate(playerShape, iconName(move.icon)));
    dispatch(delLoading());
  });
};

export default {
  shapeLoaded,
  loadComputerShape,
};
