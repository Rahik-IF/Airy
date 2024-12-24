// productsApi.js

import { apiSlice } from "./api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `latest/products`,
    }),
    getProductsByCategory: builder.query({
      query: ({ category, skip=0, take=10 }) =>
        `${category}/products?skip=${skip}&take=${take}`,
    }),
    getProductBySlug: builder.query({
      query: ({ slug }) =>
        `/products/${slug}`,
    }),
    getFeaturedProducts: builder.query({
      query: () => `random/products`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductBySlugQuery,
  useGetEquipmentsQuery,
  useGetEquipmentsByCategoryQuery,
  useGetFeaturedProductsQuery
} = productsApi;
