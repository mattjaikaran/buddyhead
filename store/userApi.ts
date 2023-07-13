import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { User } from '@/lib/types/userTypes';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    search: builder.query<User[], string>({
      query: (q) => `/search?name=${q}`,
      providesTags: (result, error, search) => [{ type: 'users', search }],
    }),
  }),
});
