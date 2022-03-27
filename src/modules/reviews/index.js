import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from "../utils";

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: defaultState,

  reducers: {
    startLoading: (state) => {
      return {
        ...defaultState,
        isLoading: true,
        entities: {
          ...state.entities,
        }
      }
    },
    failLoadingReviews: (state, { payload: { error } }) => {
      return {
        ...defaultState,
        isFailed: true,
        error: error,
        entities: {
          ...state.entities,
        }
      }
    },
    addReviews: (state, { payload: { reviews } }) => {
      return {
        ...defaultState,
        entities: {
          ...state.entities,
          ...reviews,
        },
      };
    },
  },
});
