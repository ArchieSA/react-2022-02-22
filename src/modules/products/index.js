import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from "../utils";

export const productsSlice = createSlice({
    name: 'products',
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
        failLoadingProducts: (state, { payload: { error } }) => {
            return {
                ...defaultState,
                isFailed: true,
                error: error,
                entities: {
                    ...state.entities,
                }
            }
        },
        addProducts: (state, { payload: { products } }) => {
            return {
                ...defaultState,
                entities: {
                    ...state.entities,
                    ...products,
                },
            };
        },
    }
});
