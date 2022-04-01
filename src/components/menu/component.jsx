import { ProductContainer } from "../product/container";
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import React from 'react';

const Menu = ({ menu }) => {
    return (
        <div className={styles.menu}>
            <div>
                {menu.map((productId) => <ProductContainer key={productId} productId={productId} />)}
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