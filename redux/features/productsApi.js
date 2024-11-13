// productsApi.js

import { apiSlice } from "./api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `latest/products`, 
    }),
    getProductsByCategory: builder.query({
      query: (category) => `${category}/products`,
    }),
    getEquipments: builder.query({
      query: () => `latest/equipments`, 
    }),
    getEquipmentsByCategory: builder.query({
      query: (category) => `${category}/equipments`,
    }),
  }),
  overrideExisting: false,
});

export const { 
    useGetProductsQuery, 
    useGetProductsByCategoryQuery,
    useGetEquipmentsQuery,
    useGetEquipmentsByCategoryQuery
  } = productsApi;
