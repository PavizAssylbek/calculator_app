import { ResultView } from 'components/ResultView';
import { AppState } from 'modules/main/store';
import { setRestAllValue } from 'modules/main/store/reducers/main';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CalculatorRight } from 'styles';

const CalculatorRightBlock = () => {
  const dispatch = useDispatch();
  const { billAmount, numberOfGuests, tipPercentage, customTipPercentage } = useSelector(
    (state: AppState) => state.mainReducer,
  );

  const resetState = useCallback(() => {
    dispatch(setRestAllValue());
  }, [dispatch]);

  return (
    <CalculatorRight>
      <ResultView
        billAmount={billAmount}
        numberOfGuests={numberOfGuests}
        tipPercentage={tipPercentage || customTipPercentage}
        reset={resetState}
      />
    </CalculatorRight>
  );
};

export default CalculatorRightBlock;
