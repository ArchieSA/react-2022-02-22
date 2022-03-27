import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from "../utils";

export const usersSlice = createSlice({
  name: 'users',
  initialState: defaultState,
  reducers: {
    startLoading: (state) => {
      return {
        ...defaultState,
        isLoading: true,
      }
    },
    failLoadingUsers: (state, { payload: { error } }) => {
      return {
        ...defaultState,
        isFailed: true,
        error: error,
      }
    },
    addUsers: (state, { payload: { users } }) => {
      return {
        ...defaultState,
        entities: users,
      };
    },
  },
});
