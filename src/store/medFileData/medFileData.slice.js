import { createSlice } from '@reduxjs/toolkit';

export const medFileSlice = createSlice({
  name: 'medFileData',
  initialState: null,
  reducers: {
    setMedFileData: (state, { payload }) => {
      state = payload;
    },
  },
});
export const { setMedFileData } = medFileSlice.actions;