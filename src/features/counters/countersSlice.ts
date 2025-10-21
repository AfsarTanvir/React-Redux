import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Counter {
  id: number;
  value: number;
}

const initialState: Counter[] = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const countersSlice = createSlice({
  name: "counters",
  initialState: initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((c) => c.id === action.payload);
      if (index !== -1) state[index].value += 1;
    },
    decrement: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((c) => c.id === action.payload);
      if (index !== -1) state[index].value -= 1;
    },
    reset: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((c) => c.id === action.payload);
      if (index !== -1) state[index].value = 0;
    },
    incrementByAmount: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      const index = state.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) state[index].value += action.payload.amount;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  countersSlice.actions;
export default countersSlice.reducer;
