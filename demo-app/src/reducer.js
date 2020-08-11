import { exists } from '@luisgilgb/js-utils';
import { ACTIONS } from './actions';
import { SUBPATH_TYPES } from './consts';

const INITIAL_DRAFT_POINT_STATE = {
  type: 'move',
  clickIndex: 0,
  x: 0,
  y: 0,
  r: 0,
  controlX: 0,
  controlY: 0,
  controlX1: 0,
  controlY1: 0,
  controlX2: 0,
  controlY2: 0,
  largeArcFlag: 1,
  sweepFlag: 1
};

export const INITIAL_STATE = {
  ...INITIAL_DRAFT_POINT_STATE,
  points: []
};

const retrieveNewPoint = (rawState = {}, stateOverride = {}) => {
  const state = { ...rawState, ...stateOverride };
  const type = state.points && state.points.length ? state.type : 'move';
  const point = {
    type
  };
  const { formKeys } = SUBPATH_TYPES[state.type];
  Object.keys(formKeys).forEach((key) => {
    if (formKeys[key]) {
      point[key] = state[key];
    }
  });
  return point;
};

const lastXY = (points = [], reverseI = 1, tempRes = {}) => {
  if (!(points && points.length)) {
    return { x: 0, y: 0 };
  }
  const { x = tempRes.x, y = tempRes.y } = points.slice(-reverseI)[0];
  return (exists(x) && exists(y)) || reverseI === points.length
    ? { x, y }
    : lastXY(points, reverseI + 1, { x, y });
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
      clickIndex: 0,
      type: points.length ? state.type : 'line',
      points: [...state.points, retrieveNewPoint(state)]
    }),
    [ACTIONS.UPDATE_DRAFT_POINT]: () => ({
      ...state,
      ...payload.draft
    }),
    [ACTIONS.CLICK_SVG]: () => {
      const { x, y } = payload;
      const { clickActions } = SUBPATH_TYPES[state.type];
      const { key: actionKey } = clickActions[state.clickIndex];
      let update = {};
      switch (actionKey) {
        case 'x':
          update.x = x;
          break;
        case 'y':
          update.y = y;
          break;
        case 'controlxy':
          update.controlX = x;
          update.controlY = y;
          break;
        case 'controlxy1':
          update.controlX1 = x;
          update.controlY1 = y;
          break;
        case 'controlxy2':
          update.controlX2 = x;
          update.controlY2 = y;
          break;
        case 'r':
          const { x: oldX, y: oldY } = lastXY(state.points);
          update.r = Math.sqrt(Math.pow(x - oldX, 2) + Math.pow(y - oldY, 2));
        default:
          update.x = x;
          update.y = y;
          break;
      }
      const isLastClickIndex = state.clickIndex >= clickActions.length - 1;
      return {
        ...state,
        clickIndex: isLastClickIndex ? 0 : state.clickIndex + 1,
        ...update,
        type: state.points.length ? state.type : 'line',
        points: isLastClickIndex
          ? [...state.points, retrieveNewPoint(state, update)]
          : state.points
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
