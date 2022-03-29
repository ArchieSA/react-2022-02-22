import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {},
    reducers: {
        addProduct: (state, { payload }) => {
            state[payload.productId] = (state[payload.productId] || 0) + 1;

            return state;
        },
        removeProduct: (state, { payload }) => {
            state[payload.productId] =
                state[payload.productId] ? state[payload.productId] - 1 : 0;

            return state;
        },
    }
});