import React, { useState, useReducer } from 'react';
import JSONTree from 'react-json-tree';
import Path from '../../src/Path';
import { Box, Flex, Button } from 'rebass';
import { actionCreators } from './actions';
import reducer, { INITIAL_STATE } from './reducer';
import Form from './form/Form';
import { getElOffset, getSvgEl } from './utils';
import { SUBPATH_TYPES } from './consts';
import './DemoApp.css';

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { points, type } = state;

  const currentOption = SUBPATH_TYPES[type];
  const { formKeys, clickActions } = currentOption;

  const setType = (newTypeValue) => {
    dispatch(actionCreators.setType(newTypeValue));
  };

  const addPoint = () => {
    dispatch(actionCreators.addPoint());
  };

  const onFormChange = (key, value) => {
    dispatch(actionCreators.updateDraftPoint({ [key]: value }));
  };

  const onSvgClick = (e) => {
    const svgEl = getSvgEl(e.target);
    if (svgEl) {
      const offset = getElOffset(svgEl);
      const clickX = e.pageX - offset.x;
      const clickY = e.pageY - offset.y;
      dispatch(actionCreators.clickSvg(clickX, clickY));
      /*const currentAction = clickActions[pointIndex];
      const nextPointIndex = pointIndex + 1;
      switch (currentAction.key) {
        case 'x':
          setX(clickX);
          break;
        case 'y':
          setY(clickY);
          break;
        case 'controlxy':
          setControlX(clickX);
          setControlY(clickY);
          break;
        case 'controlxy1':
          setControlX1(clickX);
          setControlY1(clickY);
          break;
        case 'controlxy2':
          setControlX2(clickX);
          setControlY2(clickY);
          break;
        default:
          setX(clickX);
          setY(clickY);
          break;
      }
      if (clickActions.length === nextPointIndex) {
      }*/
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
            renderTypeSelect={!!points.length}
            type={type}
            x={state.x}
            y={state.y}
            controlX={state.controlX}
            controlY={state.controlY}
            controlX1={state.controlX1}
            controlY1={state.controlY1}
            controlX2={state.controlX2}
            controlY2={state.controlY2}
            formKeys={formKeys}
            setType={setType}
            onChange={onFormChange}
            onSubmit={addPoint}
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
              onClick={() => {
                dispatch(actionCreators.resetPoints());
              }}
            >
              Reset
            </Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
