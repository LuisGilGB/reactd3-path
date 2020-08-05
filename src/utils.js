export const numberifyParams = (fn) => (...params) =>
  fn(...params.map((p) => +p));

export const sumOfSquares = (a, b) => a * a + b * b;
