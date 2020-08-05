import React, { useState } from 'react';
import { Box, Button } from 'rebass';
import { Select } from '@rebass/forms';
import NumberField from './NumberField';
import { OPTIONS } from '../consts';

const Form = (props) => {
  const {
    type,
    x,
    y,
    controlX1,
    controlY1,
    controlX2,
    controlY2,
    formKeys,
    setType,
    setX,
    setY,
    setControlX1,
    setControlY1,
    setControlX2,
    setControlY2,
    addPoint
  } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(type);
    const newPoint = { type, x, y, controlX1, controlY1, controlX2, controlY2 };
    console.log('New point:', newPoint);
    addPoint(newPoint);
  };

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  const onChangeGen = (setter) => (value) => {
    setter(value);
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
      {formKeys.x && (
        <NumberField
          m={2}
          name="x"
          label="x"
          value={x}
          onChange={onChangeGen(setX)}
        />
      )}
      {formKeys.y && (
        <NumberField
          m={2}
          name="y"
          label="y"
          value={y}
          onChange={onChangeGen(setY)}
        />
      )}
      {formKeys.controlX1 && (
        <NumberField
          m={2}
          name="controlX1"
          label="Control X 1"
          value={controlX1}
          onChange={onChangeGen(setControlX1)}
        />
      )}
      {formKeys.controlY1 && (
        <NumberField
          m={2}
          name="controlY1"
          label="Control Y 1"
          value={controlY1}
          onChange={onChangeGen(setControlY1)}
        />
      )}
      {formKeys.controlX2 && (
        <NumberField
          m={2}
          name="controlX2"
          label="Control X 2"
          value={controlX2}
          onChange={onChangeGen(setControlX2)}
        />
      )}
      {formKeys.controlY2 && (
        <NumberField
          m={2}
          name="controlY2"
          label="Control Y 2"
          value={controlY2}
          onChange={onChangeGen(setControlY2)}
        />
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
