import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MAIN_API_URL } from '../../constants/api'

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: MAIN_API_URL }),
  endpoints: (builder) => ({
    searchCards: builder.mutation({
      query: (body) => ({
        url: '/firstTest/search',
        method: 'POST',
        body
      })
    })
  }),
})

export const {useSearchCardsMutation} = cardsApi