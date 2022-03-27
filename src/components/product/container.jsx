import { Product } from './component';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from "react";
import { basketSlice } from "../../modules/basket"
import { selectProductCountById } from "../../modules/basket/selectors";

export const ProductContainer = ({ product, restId }) => {
    const dispatch = useDispatch();
    const amount = useSelector(
        state => selectProductCountById(state, product.id) || 0
    );

    const decrement = useCallback(() => {
        dispatch(basketSlice.actions.removeProduct({ productId: product.id }));
    }, [product.id]);

    const increment = useCallback(() => {
        dispatch(basketSlice.actions.addProduct({ productId: product.id, restId: restId }));
    }, [product.id, restId]);

    return <Product product={product} amount={amount} decrement={decrement} increment={increment} />
}
