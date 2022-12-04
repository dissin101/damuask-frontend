import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MAIN_API_URL } from '../../constants/api'

export const phrasesDataApi = createApi({
  reducerPath: 'phrasesDataApi',
  baseQuery: fetchBaseQuery({ baseUrl: MAIN_API_URL }),
  endpoints: (builder) => ({

    getPhrasesData: builder.mutation({
        query: (body) => ({
          headers: {
            'content-type': 'application/json',
          },
          url: `/test`,
          method: 'POST',
          body
        }),
      }),  

  }),
})

export const { useGetPhrasesDataMutation } = phrasesDataApi;