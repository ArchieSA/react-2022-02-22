import { createSlice } from '@reduxjs/toolkit';
import { normalizedProducts } from '../../fixtures'

export const productsSlice = createSlice({
    name: 'products',
    initialState: normalizedProducts,
});