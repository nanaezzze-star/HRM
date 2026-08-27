import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "usersInfoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => `users?limit=100`,
      transformResponse: (response) => response?.users || response || [],
    }),

    getUserById: build.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery: useUsers, useGetUserByIdQuery: useUserById } =
  userApi;
