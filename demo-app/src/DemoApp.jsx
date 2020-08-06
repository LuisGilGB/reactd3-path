import React, { useState } from 'react';
import JSONTree from 'react-json-tree';
import Path from '../../src/Path';
import { Box, Flex, Button } from 'rebass';
import Form from './form/Form';
import { getElOffset, getSvgEl } from './utils';
import { OPTIONS } from './consts';
import './DemoApp.css';

const INITIAL_STATE = {
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

export default function App() {
  const [points, setPoints] = useState([]);
  const [currentSubPathType, setCurrentSubPathType] = useState(
    INITIAL_STATE.type
  );
  const [pointIndex, setPointIndex] = useState(INITIAL_STATE.pointIndex);
  const [x, setX] = useState(INITIAL_STATE.x);
  const [y, setY] = useState(INITIAL_STATE.y);
  const [controlX, setControlX] = useState(INITIAL_STATE.controlX);
  const [controlY, setControlY] = useState(INITIAL_STATE.controlY);
  const [controlX1, setControlX1] = useState(INITIAL_STATE.controlX1);
  const [controlY1, setControlY1] = useState(INITIAL_STATE.controlY1);
  const [controlX2, setControlX2] = useState(INITIAL_STATE.controlX2);
  const [controlY2, setControlY2] = useState(INITIAL_STATE.controlY2);

  const currentOption = OPTIONS.find((opt) => opt.key === currentSubPathType);
  const { formKeys } = currentOption;

  const setType = (newTypeValue) => {
    setCurrentSubPathType(newTypeValue);
    setPointIndex(INITIAL_STATE.pointIndex);
    setX(INITIAL_STATE.x);
    setY(INITIAL_STATE.y);
    setControlX(INITIAL_STATE.controlX);
    setControlY(INITIAL_STATE.controlY);
    setControlX1(INITIAL_STATE.controlX1);
    setControlY1(INITIAL_STATE.controlY1);
    setControlX2(INITIAL_STATE.controlX2);
    setControlY2(INITIAL_STATE.controlY2);
  };

  const addPoint = (newPoint) => {
    console.log(newPoint);
    setPoints([...points, newPoint]);
    setPointIndex(0);
  };

  const onSvgClick = (e) => {
    const svgEl = getSvgEl(e.target);
    if (svgEl) {
      const offset = getElOffset(svgEl);
      addPoint({
        type: currentSubPathType,
        [formKeys.x && 'x']: e.pageX - offset.x,
        [formKeys.y && 'y']: e.pageY - offset.y,
        [formKeys.controlX && 'controlX']: controlX,
        [formKeys.controlY && 'controlY']: controlY,
        [formKeys.controlX1 && 'controlX1']: controlX1,
        [formKeys.controlY1 && 'controlY1']: controlY1,
        [formKeys.controlX2 && 'controlX2']: controlX2,
        [formKeys.controlY2 && 'controlY2']: controlY2
      });
    }
  };

  return (
    <div className="App">
      <Flex p={2} overflow="auto">
        <Box
          display="inline-block"
          minWidth={240}
          width={240}
          overflow="hidden"
        >
          <Box bg="primary" p={2} color="white">
            Path
          </Box>
          <Box p={2}>
            {points.map((p, i) => (
              <Box
                key={i}
                m={1}
                sx={{
                  textAlign: 'left',
                  flexWrap: 'wrap',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'initial'
                }}
              >
                <JSONTree data={p} hideRoot />
              </Box>
            ))}
          </Box>
          <Form
            type={currentSubPathType}
            x={x}
            y={y}
            controlX={controlX}
            controlY={controlY}
            controlX1={controlX1}
            controlY1={controlY1}
            controlX2={controlX2}
            controlY2={controlY2}
            formKeys={formKeys}
            setType={setType}
            setX={setX}
            setY={setY}
            setControlX={setControlX}
            setControlY={setControlY}
            setControlX1={setControlX1}
            setControlY1={setControlY1}
            setControlX2={setControlX2}
            setControlY2={setControlY2}
            addPoint={addPoint}
          />
        </Box>
        <Box mx={3} minWidth={600} width={600}>
          <Box height={600} minHeight={600} sx={{ border: '2px solid black' }}>
            <svg width={600} height={600} onClick={onSvgClick}>
              {points && points.length && (
                <Path
                  points={points}
                  stroke="black"
                  strokeWidth={1}
                  fill="red"
                  closePath
                />
              )}
            </svg>
          </Box>
          <Flex m={2}>
            <Button
              flex={1}
              bg="secondary"
              sx={{
                ':hover': {
                  bg: 'tomato',
                  cursor: 'pointer'
                }
              }}
              p={2}
              onClick={() => setPoints([])}
            >
              Reset
            </Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
