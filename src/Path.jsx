import React from 'react';
import { closePath } from './pathSerializers';
import { SUBPATH_TYPE_MAP } from './subpathsMap';

const DEFAULT_POINTS = [];

const Path = (props) => {
  const {
    points = DEFAULT_POINTS,
    fill,
    closePath: closePathProp,
    ...otherProps
  } = props;

  const serializePoints = (points = []) => {
    const tempPath = points.reduce((temp, p, i) => {
      const { serializer, getParams } = i
        ? (p.type && SUBPATH_TYPE_MAP[p.type.toLowerCase()]) ||
          SUBPATH_TYPE_MAP.default
        : SUBPATH_TYPE_MAP.move;
      return `${temp} ${serializer(...getParams(p))}`;
    }, '');
    return (closePathProp ? closePath(tempPath) : tempPath).trim();
  };

  return (
    <path
      {...otherProps}
      d={serializePoints(points)}
      fill={fill || 'transparent'}
    />
  );
};

export default Path;
