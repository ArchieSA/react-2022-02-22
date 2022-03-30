import { Product } from './component';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from "react";
import React from 'react';
import { addProduct, removeProduct, deleteProduct } from '../../modules/actions/basket-actions';
import { selectProductById } from '../../modules/selectors/product-selectors';

export const ProductContainer = ({ productId }) => {
    const product = useSelector((state) => selectProductById(state, productId));

    const dispatch = useDispatch();
    const amount = useSelector(
        state => state.basket[product.id] || 0
    );

    const decrement = useCallback(() => {
        dispatch(removeProduct(product.id));
    }, [product.name]);

    const increment = useCallback(() => {
        dispatch(addProduct(product.id));
    }, [product.name]);

    const onDelete = useCallback(() => {
        dispatch(deleteProduct(product.id));
    }, []);

    return <Product product={product} amount={amount} decrement={decrement} increment={increment} onDelete={onDelete} />
}