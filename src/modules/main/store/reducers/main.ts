import { createSlice } from '@reduxjs/toolkit';
import { initialStateI } from 'modules/main/models';

const initialState: initialStateI = {
  billAmount: 0,
  numberOfGuests: 0,
  tipPercentage: 0,
  customTipPercentage: 0,
  listTips: [5, 10, 15, 25, 50],
};

const main = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setBillAmount: (state, { payload }: { payload: number }) => {
      state.billAmount = payload;
    },
    setNumberOfGuests: (state, { payload }: { payload: number }) => {
      state.numberOfGuests = payload;
    },
    setTipPercentage: (state, { payload }: { payload: number }) => {
      state.tipPercentage = payload;
      state.customTipPercentage = 0;
    },
    setCustomTipPercentage: (state, { payload }: { payload: number }) => {
      state.customTipPercentage = payload;
      state.tipPercentage = 0;
    },
    setRestAllValue: (state) => {
      state.customTipPercentage = 0;
      state.billAmount = 0;
      state.tipPercentage = 0;
      state.numberOfGuests = 0;
    },
  },
});

export const {
  setBillAmount,
  setNumberOfGuests,
  setTipPercentage,
  setCustomTipPercentage,
  setRestAllValue,
} = main.actions;

export const mainReducer = main.reducer;
