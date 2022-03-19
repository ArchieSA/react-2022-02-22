import { Product } from './component';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
  addProduct,
  removeAllProductItems,
  removeProduct,
} from '../../modules/actions/basket-actions';

export const ProductContainer = ({ product }) => {
  // const { decrement, increment } = useValue(0);

  const dispatch = useDispatch();
  const amount = useSelector((state) => state.basket[product.name] || 0);

  const decrement = useCallback(() => {
    dispatch(removeProduct(product.name));
  }, [product.name]);

  const increment = useCallback(() => {
    dispatch(addProduct(product.name));
  }, [product.name]);

  const removeAll = useCallback(() => {
    dispatch(removeAllProductItems(product.name));
  }, [product.name]);

  return (
    <Product
      product={product}
      amount={amount}
      decrement={decrement}
      increment={increment}
      removeAll={removeAll}
    />
  );
};
