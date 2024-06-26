import baseAPI from '@store/api';

const userEndpoints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (body: any) => ({
        url: '/api/users/login',
        method: 'POST',
        body,
      }),
    }),
    signup: builder.mutation<any, any>({
      query: (body) => ({
        url: '/api/users/signup',
        method: 'POST',
        body,
      }),
    }),
    getProfile: builder.query({
      query: () => ({
        url: '/api/users/profile',
        method: 'GET'
      }),
    })
  }),
});

export const { useLoginMutation, useSignupMutation, useGetProfileQuery } = userEndpoints;