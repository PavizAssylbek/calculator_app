import React, { useEffect, useState } from 'react';
import { calcTipPerPerson, calcTotalPerPerson } from 'utils';

import { IResultView } from './model';
import {
  StyledResultScreen,
  TipContent,
  TipDescr,
  TipInfo,
  TipResetButton,
  TipResultText,
  TipTitle,
} from './styled';

const ResultView = (props: IResultView) => {
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    if (!props.billAmount || !props.numberOfGuests || !Number(props.numberOfGuests > 0)) {
      setTipAmount(0);
      setTotalAmount(0);
      return;
    }
    setTipAmount(
      Number(
        calcTipPerPerson(props.billAmount, props.numberOfGuests, props.tipPercentage),
      ),
    );
    setTotalAmount(
      Number(
        calcTotalPerPerson(props.billAmount, props.numberOfGuests, props.tipPercentage),
      ),
    );
  }, [props.billAmount, props.numberOfGuests, props.tipPercentage]);

  const haveData = props.billAmount && props.numberOfGuests > 0 && props.billAmount > 0;
  const amountPersonResult = tipAmount ? '$' + tipAmount.toFixed(2) : '$0.00';
  const totalPersonResult = totalAmount ? '$' + totalAmount.toFixed(2) : '$0.00';

  return (
    <StyledResultScreen>
      <TipContent>
        <TipInfo>
          <TipTitle>Tip Amount</TipTitle>
          <TipDescr>/ person</TipDescr>
        </TipInfo>
        <TipResultText>{amountPersonResult}</TipResultText>
      </TipContent>
      <TipContent>
        <TipInfo>
          <TipTitle>Total</TipTitle>
          <TipDescr>/ person</TipDescr>
        </TipInfo>
        <TipResultText>{totalPersonResult}</TipResultText>
      </TipContent>
      <TipResetButton onClick={props.reset} isDisabled={!haveData}>
        Reset
      </TipResetButton>
    </StyledResultScreen>
  );
};

export default ResultView;
