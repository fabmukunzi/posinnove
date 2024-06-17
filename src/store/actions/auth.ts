import baseAPI from '@store/api';

const userEndpoints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (body) => ({
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
  }),
});

export const { useLoginMutation, useSignupMutation } = userEndpoints;
