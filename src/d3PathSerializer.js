import { numberifyParams, sumOfSquares } from './utils';
import { lineTo, circArcTo } from './pathSerializers';
import { PI, TAU, EPSILON, TAU_EPSILON } from './consts';

export const pathArcTo = numberifyParams((x0, y0, x1, y1, x2, y2, r) => {
  // TODO: Add non negative radius check.

  // TODO: Add empty check.

  const x01 = x0 - x1,
    y01 = y0 - y1,
    x21 = x2 - x1,
    y21 = y2 - y1,
    l01_2 = sumOfSquares(x01, y01);

  // If (x0,y0) and (x1,y1) are the same, do nothing.
  if (l01_2 <= EPSILON) {
    return '';
  }

  // Returns a line if the radius is 0 or (x1,y1) and (x2,y2) are the same.
  else if (!r || Math.abs(y01 * x21 - y21 * x01) <= EPSILON) {
    return lineTo(x1, y1);
  } else {
    const x20 = x2 - x0,
      y20 = y2 - y0,
      l21_2 = sumOfSquares(x21, y21),
      l20_2 = sumOfSquares(x20, y20),
      l21 = Math.sqrt(l21_2),
      l01 = Math.sqrt(l01_2),
      l =
        r *
        Math.tan(
          (PI - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2
        ),
      t01 = l / l01,
      t21 = l / l21;

    // If the start tangent is not coincident with (x0,y0), returns a line.
    if (Math.abs(t01 - 1) > EPSILON) {
      return lineTo(x1 + t01 * x01, y1 + t01 * y01);
    }
    return circArcTo(
      r,
      0,
      0,
      y01 * x20 > x01 * y20,
      x1 + t21 * x21,
      y1 + t21 * y21
    );
  }
});

export const pathArc = numberifyParams((x, y, r, a0, a1, ccw) => {
  const dx = r * Math.cos(a0),
    dy = r * Math.sin(a0),
    x0 = x + dx,
    y0 = y + dy,
    cw = 1 ^ ccw;
  let da = ccw ? a0 - a1 : a1 - a0;

  // TODO: Add non negative radius check.

  // TODO: Add empty check.

  // TODO: Add (x0,y0) non coincident with last point in the current path check (probably this should go out of this function).

  // If the radius is 0 or the arc is empty, returns an empty string.
  if (!r || da < EPSILON) {
    return '';
  }

  // Flips the direction if the angle goes the wrong way.
  if (da < 0) {
    da = (da % TAU) + TAU;
  }

  // If the resulting operation is a complete circle, draws two arcs to complete it in the path.
  if (da > TAU_EPSILON) {
    return `${circArcTo(r, 0, 1, cw, x - dx, y - dy)} ${circArcTo(
      r,
      0,
      1,
      cw,
      x0,
      y0
    )}}`;
  }
  return circArcTo(
    r,
    0,
    +(da >= PI),
    cw,
    x + r * Math.cos(a1),
    y + r * Math.sin(a1)
  );
});
