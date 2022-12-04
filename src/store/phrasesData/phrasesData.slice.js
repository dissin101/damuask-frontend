import { createSlice } from '@reduxjs/toolkit';

const phrasesDataInitialState = {
    data: null,
}

export const phrasesDataSlice = createSlice({
  name: 'phrasesData',
  initialState: phrasesDataInitialState,
  reducers: {
    setPhrasesData: (state, { payload }) => {
      state.data = payload;
    },
  },
});
export const { setPhrasesData } = phrasesDataSlice.actions;