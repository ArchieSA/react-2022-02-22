import { Product } from './component';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from "react";
import { addProduct, removeProduct, removeAllProduct } from '../../modules/actions/basket-actions'
import { useEffect } from 'react';

export const ProductContainer = ({ product }) => {
    // const { decrement, increment } = useValue(0);

    const dispatch = useDispatch();

    const loginStatus = useSelector(    
        state => state.login.isLogin
    );
    
    const amount = useSelector(
        state => state.basket[product.name] || 0
    );

    const decrement = useCallback(() => {
        dispatch(removeProduct(product.name));
    }, [product.name]);

    const increment = useCallback(() => {
        dispatch(addProduct(product.name));
    }, [product.name]);

    const remove = useCallback(() => {
        dispatch(removeAllProduct(product.name));
    }, [product.name]);

    useEffect(() => {
            dispatch(removeAllProduct(product.name)) 
    }, [loginStatus])

    return <Product product={product} amount={amount} decrement={decrement} increment={increment} remove={remove} />
}