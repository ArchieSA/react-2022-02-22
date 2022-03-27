import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {},
    reducers: {
        addProduct: (state, { payload }) => {
            state[payload.productId] = {
                amount: (state[payload.productId]?.amount || 0) + 1,
                restId: payload.restId,
            };

            return state;
        },
        removeProduct: (state, { payload }) => {
            const amount = state[payload.productId]?.amount;
            amount > 1 ? state[payload.productId].amount = amount - 1
                : delete state[payload.productId];
            return state;
        },
    }
});
