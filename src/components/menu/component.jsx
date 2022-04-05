import { ProductContainer } from "../product/container";
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Menu = ({ menu, products }) => {
    const [searchValue, setSearchValue] = useState("");
    const [filteredMenu, setFilteredMenu] = useState(menu);
    const history = useHistory();
    const { search } = useLocation();

    useEffect(() => {
        const parsed = search.substr(3);
        const result = products.filter(product => product.name.toLowerCase().includes(parsed.toLowerCase()));
        if(result.length !== 0 && result !== undefined) {
            setFilteredMenu(result.map(res => res.id));
        }
        else {
            setFilteredMenu(menu);
        }
    }, [search, products]);

    useEffect(() => {
        if (searchValue) {
            history.replace({
                search: `?q=${searchValue}`
            });
        } else {
            history.replace({
                search: `?q=""`
            });
        }
    }, [searchValue, history]);

    return (
        <div className={styles.menu}>
            <input
                value={searchValue}
                className={styles.searchField}
                onChange={(event) => setSearchValue(event.currentTarget.value)}
                placeholder="Please select product..." />
            <div>
                {filteredMenu.map(productId => (
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