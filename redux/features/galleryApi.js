// galleryApi.js

import { apiSlice } from "./api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPictures: builder.query({
      query: () => `gallery`,
    }),
  }),
  overrideExisting: false,
});

export const {
 useGetPicturesQuery
} = productsApi;
