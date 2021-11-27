import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // filterContact: (_, action) => action.payload,
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filter = filterSlice.reducer;
