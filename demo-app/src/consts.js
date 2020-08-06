export const OPTIONS = [
  {
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
  {
    key: 'horizontal',
    label: 'Horizontal',
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
    }
  },
  {
    key: 'vertical',
    label: 'Vertical',
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
    }
  },
  {
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
    }
  },
  {
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
    }
  },
  {
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
    }
  }
];
