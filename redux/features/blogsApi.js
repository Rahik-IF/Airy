// blogsApi.js

import { apiSlice } from "./api/apiSlice";

export const blogsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: ({ skip = 0, take = 3 }) => ({
                url: `/blogs`,
                params: { skip, take },
                method: "GET",
            }),
        }),
        getBlogBySlug: builder.query({
            query: ({ slug }) =>
                `/blogs/${slug}`,
        }),
    }),
    overrideExisting: false,
});

export const { useGetBlogsQuery, useGetBlogBySlugQuery } = blogsApi;
