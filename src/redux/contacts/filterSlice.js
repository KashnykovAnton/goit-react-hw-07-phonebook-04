import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    'filterContact:': (_, action) => action.payload,
  },
});

export const filterContact = filterSlice.actions;
export const filter = filterSlice.reducer;
