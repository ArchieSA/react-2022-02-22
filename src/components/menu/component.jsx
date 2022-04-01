import { ProductContainer } from "../product/container";
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Menu = ({ menu }) => {
    const [searchValue, setSearchValue] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (searchValue) {
            history.replace({
                search: `?q=${searchValue}`
            });
        } else {
            history.replace({
                search: `?q=""`
            })
        }
    }, [searchValue, history]);

    const { search } = useLocation();



    return (
        <div className={styles.menu}>
            <input
                value={searchValue}
                className={styles.searchField}
                onChange={(event) => setSearchValue(event.currentTarget.value)} />
            <div>
                {menu.map((productId) => (
                    <ProductContainer key={productId} productId={productId} />
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