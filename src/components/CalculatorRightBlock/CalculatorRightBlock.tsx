import { ResultView } from 'components/ResultView';
import React, { useState } from 'react';
import { CalculatorRight } from 'styles';

const CalculatorRightBlock = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfGuests, setNumberOfGuests] = useState(0);

  const resetState = () => {
    setBillAmount(0);
    setTipPercentage(0);
    setNumberOfGuests(0);
  };

  return (
    <CalculatorRight>
      <ResultView
        billAmount={billAmount}
        numberOfGuests={numberOfGuests}
        tipPercentage={tipPercentage}
        reset={resetState}
      />
    </CalculatorRight>
  );
};

export default CalculatorRightBlock;
