import { CalcularotLeftBlock } from 'components/CalcularotLeftBlock';
import { CalculatorRightBlock } from 'components/CalculatorRightBlock';
import React from 'react';
import { CalculatorWrapper } from 'styles';

const Main = () => {
  return (
    <CalculatorWrapper>
      <CalcularotLeftBlock />
      <CalculatorRightBlock />
    </CalculatorWrapper>
  );
};

export default Main;
