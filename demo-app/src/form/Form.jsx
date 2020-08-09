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
    controlX,
    controlY,
    controlX1,
    controlY1,
    controlX2,
    controlY2,
    formKeys,
    setType,
    onChange,
    onSubmit: onSubmitProp
  } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(type);
    const newPoint = { type, x, y, controlX1, controlY1, controlX2, controlY2 };
    console.log('New point:', newPoint);
    onSubmitProp(newPoint);
  };

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  const onChangeGen = (name, value) => {
    onChange(name, value);
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
          onChange={onChangeGen}
        />
      )}
      {formKeys.y && (
        <NumberField
          m={2}
          name="y"
          label="y"
          value={y}
          onChange={onChangeGen}
        />
      )}
      {formKeys.controlX && (
        <NumberField
          m={2}
          name="controlX"
          label="Control X"
          value={controlX}
          onChange={onChangeGen}
        />
      )}
      {formKeys.controlY && (
        <NumberField
          m={2}
          name="controlY"
          label="Control Y"
          value={controlY}
          onChange={onChangeGen}
        />
      )}
      {formKeys.controlX1 && (
        <NumberField
          m={2}
          name="controlX1"
          label="Control X 1"
          value={controlX1}
          onChange={onChangeGen}
        />
      )}
      {formKeys.controlY1 && (
        <NumberField
          m={2}
          name="controlY1"
          label="Control Y 1"
          value={controlY1}
          onChange={onChangeGen}
        />
      )}
      {formKeys.controlX2 && (
        <NumberField
          m={2}
          name="controlX2"
          label="Control X 2"
          value={controlX2}
          onChange={onChangeGen}
        />
      )}
      {formKeys.controlY2 && (
        <NumberField
          m={2}
          name="controlY2"
          label="Control Y 2"
          value={controlY2}
          onChange={onChangeGen}
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
