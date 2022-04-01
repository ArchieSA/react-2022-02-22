import React from 'react';
import { Product } from './component';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from "react";
import { basketSlice } from "../../modules/basket";
import { selectProductById } from '../../modules/product/selectors';

export const ProductContainer = ({ productId }) => {
    const product = useSelector((state) => selectProductById(state, productId));

    const amount = useSelector(state => state.basket[product.id] || 0);

    const dispatch = useDispatch();

    const decrement = useCallback(() => {
        dispatch(basketSlice.actions.removeProduct({ productId: product.id }));
    }, [product.name]);

    const increment = useCallback(() => {
        dispatch(basketSlice.actions.addProduct({ productId: product.id }));
    }, [product.name]);

    return <Product product={product} amount={amount} decrement={decrement} increment={increment} />
}