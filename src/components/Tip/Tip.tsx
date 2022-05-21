import React from 'react';

import { ITip } from './model';
import { StyledInput, StyledTip } from './styled';

const Tip = (props: ITip) => {
  const handleClick = () => {
    if (props.tipPercentage === props.currentPrecent) {
      return props.handleChangeProps(0);
    }
    props.handleChangeProps(props.currentPrecent || 0);
  };

  const handleChange = (e: any) => {
    const inputValue = e.target.valueAsNumber;

    if (!isNaN(inputValue)) {
      props.handleChangeProps(inputValue);
    } else {
      props.handleChangeProps(0);
    }
  };

  const isActive = props.currentPrecent === props.tipPercentage ? 'active' : '';

  return props.custom ? (
    <StyledInput
      type={props.type}
      value={props.value}
      onChange={handleChange}
      placeholder={props.placeholder}
    />
  ) : (
    <StyledTip className={isActive} onClick={handleClick}>
      {props.currentPrecent}%
    </StyledTip>
  );
};

export default Tip;
