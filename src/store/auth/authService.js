import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MAIN_API_URL } from '../../constants/api'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: MAIN_API_URL }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: '/api/auth/signIn',
        method: 'POST',
        body
      })
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: '/api/auth/signUp',
        method: 'POST',
        body
      })
    }),
    getUserInfo: builder.mutation({
      query: (id) => ({
        url: `/firstTest/getAllByUserId/${id}`,
        method: 'GET'
      })
    })
  }),
})

export const {useLoginUserMutation, useRegisterUserMutation, useGetUserInfoMutation} = authApi