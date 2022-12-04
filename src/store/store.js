import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './auth/authService'
import { cardsApi } from './cards/CardsService'
import authReducer from './auth/authSlice'
import { medFileDataApi } from './medFileData/medFileDataService';
import { medFileSlice } from './medFileData/medFileData.slice';
import { medFormDataSlice } from './medFormData/medFormData.slice';
import { currentPageSlice } from './currentPage/currentPage.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    medFile: medFileSlice.reducer,
    currentPage: currentPageSlice.reducer,
    medFormData: medFormDataSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
    [medFileDataApi.reducerPath]: medFileDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, cardsApi.middleware, medFileDataApi.middleware),
})

setupListeners(store.dispatch)