import React, { useState } from 'react';
import JSONTree from 'react-json-tree';
import Path from '../../Path';
import { Box, Flex, Button } from 'rebass';
import Form from './form/Form';
import { getElOffset, getSvgEl } from './utils';
import './styles.css';

export default function App() {
  const [points, setPoints] = useState([]);
  const [currentSubPathType, setCurrentSubPathType] = useState('line');

  const addPoint = (newPoint) => {
    setPoints([...points, newPoint]);
  };

  const onSvgClick = (e) => {
    const svgEl = getSvgEl(e.target);
    if (svgEl) {
      const offset = getElOffset(svgEl);
      addPoint({
        type: currentSubPathType,
        x: e.pageX - offset.x,
        y: e.pageY - offset.y
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
            addPoint={addPoint}
            type={currentSubPathType}
            setType={setCurrentSubPathType}
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
