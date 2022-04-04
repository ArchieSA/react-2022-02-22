import React, { useEffect } from 'react';
import { loadProductsList } from '../../modules/product/effects/load-products';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../modules/product/selectors';
import styles from './styles.module.css';

export const ProductsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProductsList());
    }, [])

    const products = useSelector(selectProducts);

    return <table className={styles.table}>
        <tbody>
            <tr>
                <th>№</th>
                <th>Name</th>
                <th>Price</th>
                <th>Ingredients</th>
            </tr>
            {
                products.map((product, index) => {
                    return <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.ingredients.join(', ')}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
}