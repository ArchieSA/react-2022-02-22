import { createSlice } from '@reduxjs/toolkit';

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: {
        isLoading: false,
        isFailed: false,
        error: null,
        entities: {},
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
            state.isFailed = false;

            return state;
        },
        failLoading: (state, { payload: { error } }) => {
            state.isLoading = false;
            state.isFailed = true;
            state.error = error;

            return state;
        },
        addRestaurants: (state, { payload: { restaurants } }) => {
            return {
                isLoading: false,
                isFailed: false,
                entities: {
                    ...state.entities,
                    ...restaurants,
                }
            }
        }
    }
});