import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: builder => ({}),
});

export const { endpoints, reducerPath, reducer, middleware } = apiSlice;
