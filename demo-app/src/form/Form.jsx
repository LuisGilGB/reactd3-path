import React, { useState } from 'react';
import { Box, Button } from 'rebass';
import { Select } from '@rebass/forms';
import NumberField from './NumberField';
import { OPTIONS } from './consts';

const Form = (props) => {
  const { type, setType, addPoint } = props;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(type);
    addPoint({ type, x, y });
  };

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  const onXChange = (value) => {
    setX(value);
  };

  const onYChange = (value) => {
    setY(value);
  };

  return (
    <Box
      as="form"
      display="inline-flex"
      flexDirection="column"
      alignItems="stretch"
      p={1}
      onSubmit={onSubmit}
    >
      <Select name="type" value={type} onChange={onTypeChange}>
        {OPTIONS.map((opt) => (
          <option key={opt.key} value={opt.key}>
            {opt.label}
          </option>
        ))}
      </Select>
      {type !== 'vertical' && (
        <NumberField m={2} name="x" label="x" value={x} onChange={onXChange} />
      )}
      {type !== 'horizontal' && (
        <NumberField m={2} name="y" label="y" value={y} onChange={onYChange} />
      )}
      <Button
        m={2}
        sx={{
          ':hover': {
            bg: 'tomato',
            cursor: 'pointer'
          }
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default Form;
