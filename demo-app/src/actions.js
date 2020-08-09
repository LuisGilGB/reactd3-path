export const ACTIONS = {
  SET_TYPE: 'SET_TYPE',
  ADD_POINT: 'ADD_POINT',
  UPDATE_DRAFT_POINT: 'UPDATE_DRAFT_POINT',
  CLICK_SVG: 'CLICK_SVG',
  RESET_POINTS: 'RESET_POINTS'
};

export const actionCreators = {
  setType: (type) => ({
    type: ACTIONS.SET_TYPE,
    payload: { type }
  }),
  addPoint: () => ({
    type: ACTIONS.ADD_POINT,
    payload: {}
  }),
  updateDraftPoint: (draft) => ({
    type: ACTIONS.UPDATE_DRAFT_POINT,
    payload: { draft }
  }),
  clickSvg: (x, y) => ({
    type: ACTIONS.CLICK_SVG,
    payload: { x, y }
  }),
  resetPoints: () => ({
    type: ACTIONS.RESET_POINTS,
    payload: {}
  })
};
