import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_API_URL } from '@utils/constants';
import { RootState } from '.';

const baseAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: async (headers, { getState }) => {
      const {
        appReducer: { token },
      } = getState() as RootState
      console.log(token,"===========>")
      if (token) headers.set('authorization', `Bearer ${token}`)
        return headers
    },
  }),
  tagTypes: ['profile'],
  endpoints: () => ({}),
});

export default baseAPI;
