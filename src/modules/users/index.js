import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
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
        failedLoading: (state, { payload: { error } }) => {
            state.isLoading = false;
            state.isFailed = true;
            state.error = error;

            return state;
        },
        addUsers: (state, { payload: { users } }) => {
            return {
                ...state,
                isLoading: false,
                isFailed: false,
                entities: {
                    ...state.entities,
                    ...users,
                },
            }
        }
    }
})