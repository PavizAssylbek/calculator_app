import React, { useState } from 'react';

import { InputI } from './model';
import { StyledInput, StyledLabel } from './styled';

const Input = (props: InputI) => {
  const [error, setError] = useState('');

  const handleBlur = (e: any) => {
    const inputValue = e.target.valueAsNumber;

    if (!isNaN(inputValue)) {
      props.updatePropsValue(inputValue.toFixed(props.decimals));
    } else {
      props.updatePropsValue(0);
    }

    validateInput();
  };

  const handleChange = (e: any) => {
    const inputValue = e.target.valueAsNumber;

    if (!isNaN(inputValue)) {
      props.updatePropsValue(inputValue);
    } else {
      props.updatePropsValue(0);
    }
  };

  const validateInput = () => {
    if (props.validate) {
      if (props.value <= 0) {
        console.log('passed');
        setError("Can't be zero");
      } else {
        setError('');
      }
    } else return;
  };

  return (
    <>
      <StyledLabel htmlFor={props.id}>
        <span>{props.label}</span>
        {error.length > 0 && <span className="input__error__message">{error}</span>}
      </StyledLabel>
      <StyledInput
        id={props.id}
        name={props.name}
        type={props.type}
        bg={props.icon}
        value={props.value}
        placeholder={props.placeholder}
        borderColor={error.length > 0 ? '#E17052 !important' : '#F3F9FA'}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
