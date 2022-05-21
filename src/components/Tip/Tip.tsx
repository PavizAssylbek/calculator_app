import React from 'react';

import { ITip } from './model';
import { StyledInput, StyledTip } from './styled';

const Tip = (props: ITip) => {
  const handleClick = () => {
    if (props.tipPercentage === props.tip) {
      return props.handleChangeProps(0);
    }
    props.handleChangeProps(props.tip || 0);
  };

  const handleChange = (e: any) => {
    const inputValue = e.target.valueAsNumber;

    if (!isNaN(inputValue)) {
      props.handleChangeProps(inputValue);
    } else {
      props.handleChangeProps(0);
    }
  };

  // reset tip on custom input focus
  const handleFocus = () => {};

  // render this giant snake of a code
  return props.custom ? (
    <StyledInput
      type={props.type}
      value={props.value}
      onFocus={handleFocus}
      onChange={handleChange}
      placeholder={props.placeholder}
    />
  ) : (
    <StyledTip
      className={`${props.tip === props.tipPercentage ? 'active' : ''}`}
      onClick={handleClick}
    >
      {props.tip}%
    </StyledTip>
  );
};

export default Tip;
