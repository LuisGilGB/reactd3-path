export const SUBPATH_TYPES = {
  move: {
    key: 'move',
    label: 'Move',
    formKeys: {
      x: true,
      y: true
    },
    clickActions: [
      {
        key: 'xy',
        affectedKeys: ['x', 'y']
      }
    ]
  },
  line: {
    key: 'line',
    label: 'Line',
    formKeys: {
      x: true,
      y: true,
      controlX1: false,
      controlY1: false,
      controlX2: false,
      controlY2: false,
      r: false,
      largeArcFlag: false,
      sweepFlag: false
    },
    clickActions: [
      {
        key: 'xy',
        affectedKeys: ['x', 'y']
      }
    ]
  },
  horizontal: {
    key: 'horizontal',
    label: 'Horizontal',
    formKeys: {
      x: true,
      y: false,
      controlX1: false,
      controlY1: false,
      controlX2: false,
      controlY2: false,
      r: false,
      largeArcFlag: false,
      sweepFlag: false
    },
    clickActions: [
      {
        key: 'x',
        affectedKeys: ['x']
      }
    ]
  },
  vertical: {
    key: 'vertical',
    label: 'Vertical',
    formKeys: {
      x: false,
      y: true,
      controlX1: false,
      controlY1: false,
      controlX2: false,
      controlY2: false,
      r: false,
      largeArcFlag: false,
      sweepFlag: false
    },
    clickActions: [
      {
        key: 'y',
        affectedKeys: ['y']
      }
    ]
  },
  quadratic: {
    key: 'quadratic',
    label: 'Quadratic',
    formKeys: {
      x: true,
      y: true,
      controlX: true,
      controlY: true,
      controlX1: false,
      controlY1: false,
      controlX2: false,
      controlY2: false,
      r: false,
      largeArcFlag: false,
      sweepFlag: false
    },
    clickActions: [
      {
        key: 'xy',
        affectedKeys: ['x', 'y']
      },
      {
        key: 'controlxy',
        affectedKeys: ['controlX', 'controlY']
      }
    ]
  },
  bezier: {
    key: 'bezier',
    label: 'Bezier',
    formKeys: {
      x: true,
      y: true,
      controlX1: true,
      controlY1: true,
      controlX2: true,
      controlY2: true,
      r: false,
      largeArcFlag: false,
      sweepFlag: false
    },
    clickActions: [
      {
        key: 'xy',
        affectedKeys: ['x', 'y']
      },
      {
        key: 'controlxy1',
        affectedKeys: ['controlX1', 'controlY1']
      },
      {
        key: 'controlxy2',
        affectedKeys: ['controlX2', 'controlY2']
      }
    ]
  },
  arc: {
    key: 'arc',
    label: 'Arc',
    formKeys: {
      x: true,
      y: true,
      controlX1: false,
      controlY1: false,
      controlX2: false,
      controlY2: false,
      r: true,
      largeArcFlag: true,
      sweepFlag: true
    },
    clickActions: [
      {
        key: 'r',
        affectedKeys: ['r']
      },
      {
        key: 'xy',
        affectedKeys: ['x', 'y']
      }
    ]
  }
};
