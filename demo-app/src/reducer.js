import { ACTIONS } from './actions';

const INITIAL_DRAFT_POINT_STATE = {
  type: 'line',
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
    [ACTIONS.ADD_POINT]: () => ({
      ...state,
      points: [...state.points, payload.point]
    }),
    [ACTIONS.UPDATE_DRAFT_POINT]: () => ({
      ...state,
      ...payload.draft
    }),
    [ACTIONS.CLICK_SVG]: () => ({ ...state }),
    [ACTIONS.RESET_POINTS]: () => ({
      ...state,
      points: INITIAL_STATE.points
    })
  };
  return actionType && reducers[actionType]
    ? { ...state, ...reducers[actionType]() }
    : state;
};

export default reducer;
