import { createSlice } from '@reduxjs/toolkit';

export const medFormDataSlice = createSlice({
  name: 'medFormData',
  initialState: null,
  reducers: {
    setMedFormData: (state, { payload }) => {
      state = payload;
    },
  },
});
export const { setMedFormData } = medFormDataSlice.actions;