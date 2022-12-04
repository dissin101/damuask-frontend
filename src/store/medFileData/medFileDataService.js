import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MAIN_API_URL } from '../../constants/api'

export const medFileDataApi = createApi({
  reducerPath: 'medFileDataApi',
  baseQuery: fetchBaseQuery({ baseUrl: MAIN_API_URL }),
  endpoints: (builder) => ({

    getMedFileData: builder.mutation({
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

export const { useGetMedFileDataMutation } = medFileDataApi