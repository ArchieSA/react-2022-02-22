import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import {selectProducts} from "../../modules/product/selectors";
import {ProductContainer} from "../../components/product/container";
import React from "react";

export const Products = () => {
    const products = useSelector( state => selectProducts(state));

    return (
        <div className={styles.menu}>
            <div>
                {products.map((product) => (
                    <ProductContainer key={product.id} productId={product.id} />
                ))}
            </div>
        </div>
    );
}