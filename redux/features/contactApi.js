import { apiSlice } from "./api/apiSlice";

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
      getContacts: builder.query({
      query: () => `settings`,
    }),
    }),  
});

export const { useGetContactsQuery } = contactApi;

