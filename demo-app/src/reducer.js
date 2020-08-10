import { ACTIONS } from './actions';
import { SUBPATH_TYPES } from './consts';

const INITIAL_DRAFT_POINT_STATE = {
  type: 'move',
  pointIndex: 0,
  x: 0,
  y: 0,
  controlX: 0,
  controlY: 0,
  controlX1: 0,
  controlY1: 0,
  controlX2: 0,
  controlY2: 0
};

export const INITIAL_STATE = {
  ...INITIAL_DRAFT_POINT_STATE,
  points: []
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type: actionType, payload } = action;
  const reducers = {
    [ACTIONS.SET_TYPE]: () => ({
      ...state,
      ...INITIAL_DRAFT_POINT_STATE,
      type: payload.type
    }),
    [ACTIONS.ADD_POINT]: () => {
      const type = state.points && state.points.length ? state.type : 'move';
      const newPoint = {
        type
      };
      const { formKeys } = SUBPATH_TYPES[state.type];
      Object.keys(formKeys).forEach((key) => {
        if (formKeys[key]) {
          newPoint[key] = state[key];
        }
      });
      return {
        ...state,
        type: type === 'move' ? 'line' : state.type,
        points: [...state.points, newPoint]
      };
    },
    [ACTIONS.UPDATE_DRAFT_POINT]: () => ({
      ...state,
      ...payload.draft
    }),
    [ACTIONS.CLICK_SVG]: () => {
      const { x, y } = payload;
      const { clickActions } = SUBPATH_TYPES[state.type];
      const currentAction = clickActions[state.pointIndex];
      return {
        ...state,
        pointIndex:
          state.pointIndex < clickActions.length - 1 ? state.pointIndex + 1 : 0,
        x,
        y,
        points: [...state.points, { type: 'line', x, y }]
      };
    },
    [ACTIONS.RESET_POINTS]: () => ({
      ...state,
      type: INITIAL_STATE.type,
      points: INITIAL_STATE.points
    })
  };
  return actionType && reducers[actionType]
    ? { ...state, ...reducers[actionType]() }
    : state;
};

export default reducer;
