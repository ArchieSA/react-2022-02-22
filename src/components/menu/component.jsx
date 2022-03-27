import { ProductContainer } from "../product/container";
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import React from 'react';

const Menu = ({ menu, restId }) => {
    return (
        <div className={styles.menu}>
            <div>
                {menu.map((product) => (
                    <ProductContainer key={product.id} product={product} restId={restId} />
                ))}
            </div>
        </div>
    );
}

Menu.propTypes = {
    menu: PropTypes.array,
};


Menu.defaultProps = {
    menu: [],
};

export default Menu;
