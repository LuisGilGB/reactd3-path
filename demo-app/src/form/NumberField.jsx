import React from 'react';
import { Flex } from 'rebass';
import { Label, Input } from '@rebass/forms';

const NumberField = (props) => {
  const {
    name,
    value,
    label,
    min = 0,
    max,
    onChange: onChangeProp,
    ...otherProps
  } = props;

  const onChange = (e) => {
    onChangeProp(name, +e.target.value);
  };

  return (
    <Flex {...otherProps}>
      <Label
        flex={1}
        px={3}
        justifyContent="flex-end"
        alignItems="center"
        htmlFor={name}
      >
        {label}
      </Label>
      <Input
        value={value}
        name={name}
        width={120}
        type="number"
        min={min}
        max={max}
        onChange={onChange}
      />
    </Flex>
  );
};

export default NumberField;
