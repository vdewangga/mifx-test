import { apiSlice } from '../api/apiSlice';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query({
      query: _args => `/category`
    }),
    getProducts: builder.query({
      query: _args => `/products`,
    }),
  })
})

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
} = productApiSlice;
