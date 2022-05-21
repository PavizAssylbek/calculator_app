import { CalcularotLeftBlock } from 'components/CalcularotLeftBlock';
import { CalculatorRightBlock } from 'components/CalculatorRightBlock';
import { SplitterIcon } from 'components/icons';
import React from 'react';
import { CalculatorWrapper, ContainerDiv, ContainerTitle, WrapperDiv } from 'styles';

function App() {
  return (
    <ContainerDiv>
      <WrapperDiv>
        <ContainerTitle>
          <SplitterIcon />
        </ContainerTitle>

        <CalculatorWrapper>
          <CalcularotLeftBlock />
          <CalculatorRightBlock />
        </CalculatorWrapper>
      </WrapperDiv>
    </ContainerDiv>
  );
}

export default App;
