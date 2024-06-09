import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { token?: string } = {
  token: undefined,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | undefined>) => {
      const { payload } = action;
      state.token = payload;
    },
    clearToken: (state) => {
      state.token = undefined;
    },
  },
});

export const { setToken, clearToken } = appSlice.actions;

export default appSlice.reducer;
