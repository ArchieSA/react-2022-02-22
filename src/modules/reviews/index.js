import { createSlice } from '@reduxjs/toolkit';

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        isLoading: false,
        isFailed: false,
        error: null,
        entities: {}
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
        addReviews: (state, { payload: { reviews } }) => {
            return {
                ...state,
                isLoading: false,
                isFailed: false,
                entities: {
                    ...state.entities,
                    ...reviews,
                }
            }
        }
    }
});