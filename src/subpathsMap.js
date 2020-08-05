import {
  moveTo,
  lineTo,
  hLineTo,
  vLineTo,
  quadraticCurveTo,
  bezierCurveTo,
  arcTo
} from './pathSerializers';

/*
M - moveto
L - lineto
Z - closepath
H - horizontal lineto
V - vertical lineto
C - curveto
S - smooth curveto
Q - quadratic curveto
T - smooth quadratic curveto
A - arcto
*/

const MOVE_TYPE = {
  serializer: moveTo,
  getParams: ({ x, y }) => [x || 0, y || 0]
};
const LINE_TYPE = {
  serializer: lineTo,
  getParams: ({ x, y }) => [x || 0, y || 0]
};
const HORIZONTAL_TYPE = {
  serializer: hLineTo,
  getParams: ({ x }) => [x]
};
const VERTICAL_TYPE = {
  serializer: vLineTo,
  getParams: ({ y }) => [y]
};
const QUADRATIC_TYPE = {
  serializer: quadraticCurveTo,
  getParams: ({ controlX, controlY, x, y }) => [controlX, controlY, x, y]
};
const BEZIER_TYPE = {
  serializer: bezierCurveTo,
  getParams: ({ controlX1, controlY1, controlX2, controlY2, x, y }) => [
    controlX1,
    controlY1,
    controlX2,
    controlY2,
    x,
    y
  ]
};
const ARC_TYPE = {
  serializer: arcTo,
  getParams: ({ r, rx, ry, rotation, largeArcFlag, sweepFlag, x, y }) => [
    rx || r,
    ry || r,
    rotation,
    largeArcFlag,
    sweepFlag,
    x,
    y
  ]
};

export const SUBPATH_TYPE_MAP = {
  move: MOVE_TYPE,
  line: LINE_TYPE,
  l: LINE_TYPE,
  horizontal: HORIZONTAL_TYPE,
  h: HORIZONTAL_TYPE,
  vertical: VERTICAL_TYPE,
  v: VERTICAL_TYPE,
  quadratic: QUADRATIC_TYPE,
  q: QUADRATIC_TYPE,
  bezier: BEZIER_TYPE,
  c: BEZIER_TYPE,
  arc: ARC_TYPE,
  a: ARC_TYPE,
  default: LINE_TYPE
};
