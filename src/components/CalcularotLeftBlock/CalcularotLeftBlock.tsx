import IconDollar from 'assets/images/icon-dollar.svg';
import IconPerson from 'assets/images/icon-person.svg';
import { Input } from 'components/Input';
import { Tip } from 'components/Tip';
import React, { useState } from 'react';
import { CalculatorLeft, StyledTipContainer } from 'styles';

const CalcularotLeftBlock = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const tips = [5, 10, 15, 25, 50].map((tip) => (
    <Tip
      key={tip}
      tip={tip}
      tipPercentage={tipPercentage}
      handleChangeProps={setTipPercentage}
    />
  ));

  return (
    <CalculatorLeft>
      <Input
        id="bill"
        name="bill"
        icon={IconDollar}
        type="number"
        label="Bill"
        decimals={2}
        placeholder="0"
        value={billAmount}
        updatePropsValue={setBillAmount}
      />
      <StyledTipContainer>
        <h3>Select Tip %</h3>
        <div className="tips">
          {tips}
          <Tip
            type={'number'}
            value={tipPercentage}
            tipPercentage={tipPercentage}
            handleChangeProps={setTipPercentage}
            placeholder="Custom"
            custom
          />
        </div>
      </StyledTipContainer>
      <Input
        id="guests"
        name="guests"
        icon={IconPerson}
        type="number"
        label="Number of People"
        placeholder="0"
        decimals={0}
        value={numberOfGuests}
        updatePropsValue={setNumberOfGuests}
        validate
      />
    </CalculatorLeft>
  );
};

export default CalcularotLeftBlock;
