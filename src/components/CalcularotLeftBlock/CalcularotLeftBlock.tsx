import IconDollar from 'assets/images/icon-dollar.svg';
import IconPerson from 'assets/images/icon-person.svg';
import { Input } from 'components/Input';
import { Tip } from 'components/Tip';
import { AppState } from 'modules/main/store';
import {
  setBillAmount,
  setCustomTipPercentage,
  setNumberOfGuests,
  setTipPercentage,
} from 'modules/main/store/reducers/main';
import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CalculatorLeft, StyledTipContainer } from 'styles';

const CalcularotLeftBlock = () => {
  const dispatch = useDispatch();
  const { billAmount, numberOfGuests, listTips, tipPercentage, customTipPercentage } =
    useSelector((state: AppState) => state.mainReducer);

  const handleChangeSetBillAmount = useCallback(
    (value: string) => {
      dispatch(setBillAmount(value));
    },
    [dispatch],
  );

  const handleChangeSetNumberOfGuests = useCallback(
    (value: string) => {
      dispatch(setNumberOfGuests(value));
    },
    [dispatch],
  );

  const handleChangeSetTipPercentage = useCallback(
    (value: string) => {
      dispatch(setTipPercentage(value));
    },
    [dispatch],
  );

  const handleChangeSetCustomTipPercentage = useCallback(
    (value: string) => {
      dispatch(setCustomTipPercentage(value));
    },
    [dispatch],
  );

  const mutatedTips = useMemo(
    () =>
      listTips.map((tip) => (
        <Tip
          key={tip}
          currentPrecent={tip}
          tipPercentage={tipPercentage}
          handleChangeProps={handleChangeSetTipPercentage}
        />
      )),
    [listTips, tipPercentage, customTipPercentage],
  );

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
        updatePropsValue={handleChangeSetBillAmount}
      />
      <StyledTipContainer>
        <h3>Select Tip %</h3>
        <div className="tips">
          {mutatedTips}
          <Tip
            type={'number'}
            value={customTipPercentage}
            handleChangeProps={handleChangeSetCustomTipPercentage}
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
        updatePropsValue={handleChangeSetNumberOfGuests}
        validate
      />
    </CalculatorLeft>
  );
};

export default CalcularotLeftBlock;
