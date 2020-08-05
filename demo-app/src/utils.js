export const getElOffset = (el) => {
  const bound = el.getBoundingClientRect();
  const html = document.documentElement;
  const left = bound.left + window.pageXOffset - html.clientLeft;
  const top = bound.top + window.pageYOffset - html.clientTop;
  return {
    left,
    top,
    x: left,
    y: top
  };
};

export const getSvgEl = (el) =>
  el.tagName === 'svg'
    ? el
    : el.tagName === 'body'
    ? null
    : getSvgEl(el.parentNode);
