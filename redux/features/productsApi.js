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
    getEquipments: builder.query({
      query: () => `latest/equipments`,
    }),
    getEquipmentsByCategory: builder.query({
      query: ({ category, skip=0, take=10 }) =>
        `${category}/equipments?skip=${skip}&take=${take}`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductBySlugQuery,
  useGetEquipmentsQuery,
  useGetEquipmentsByCategoryQuery
} = productsApi;
