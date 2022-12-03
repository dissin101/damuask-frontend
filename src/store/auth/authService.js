import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MAIN_API_URL } from '../../constants/api'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: MAIN_API_URL }),
  endpoints: (builder) => ({
  }),
})

export const {} = authApi