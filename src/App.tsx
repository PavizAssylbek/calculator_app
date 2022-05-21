import { SplitterIcon } from 'components/icons';
import { Input } from 'components/Input';
import { Tip } from 'components/Tip';
import React, { useState } from 'react';
import {
  CalculatorLeft,
  CalculatorRight,
  CalculatorWrapper,
  ContainerDiv,
  ContainerTitle,
  StyledTipContainer,
  WrapperDiv,
} from 'styles';

import IconDollar from '../images/icon-dollar.svg';
import IconPerson from '../images/icon-person.svg';

function App() {
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
    <ContainerDiv>
      <WrapperDiv>
        <ContainerTitle>
          <SplitterIcon />
        </ContainerTitle>

        <CalculatorWrapper>
          <CalculatorLeft>
            <Input
              id="bill"
              name="bill"
              icon={IconDollar}
              type="number"
              label="Bill"
              decimals={2}
              placeholder="0"
              value={0}
              updatePropsValue={(number) => {
                console.log(number);
              }}
            />
            <StyledTipContainer>
              <h3>Select Tip %</h3>
              <div className="tips">
                {tips}
                {true && (
                  <Tip
                    custom={true}
                    type={'number'}
                    value={tipPercentage}
                    tipPercentage={tipPercentage}
                    handleChangeProps={setTipPercentage}
                    placeholder="Custom"
                  />
                )}
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
              validate={true}
            />
          </CalculatorLeft>

          <CalculatorRight></CalculatorRight>
        </CalculatorWrapper>
      </WrapperDiv>
    </ContainerDiv>
  );
}

export default App;
