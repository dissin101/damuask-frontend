import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './auth/authService'
import { cardsApi } from './cards/CardsService'
import authReducer from './auth/authSlice'
import { phrasesDataApi } from './phrasesData/phrasesDataService';
import { phrasesDataSlice } from './phrasesData/phrasesData.slice';
import { medFormDataSlice } from './medFormData/medFormData.slice';
import { currentPageSlice } from './currentPage/currentPage.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    phrasesData: phrasesDataSlice.reducer,
    currentPage: currentPageSlice.reducer,
    medFormData: medFormDataSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
    [phrasesDataApi.reducerPath]: phrasesDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, cardsApi.middleware, phrasesDataApi.middleware),
})

setupListeners(store.dispatch)