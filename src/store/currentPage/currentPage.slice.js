import { createSlice } from '@reduxjs/toolkit';

const currentPageInitialState = {
    data: 'primary-examination',
}

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: currentPageInitialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.data = payload;
    },
  },
});
export const { setCurrentPage } = currentPageSlice.actions;