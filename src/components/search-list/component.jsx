import { Search } from "../search/component";
import Menu from "../menu/component";

import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { selectProductsByRestaurantIdAndNameQuery } from "../../modules/product/selectors";
import { getQueryStringParams } from "./utils"
import styles from "./styles.module.css";

export const SearchList = ({restaurantId}) => {
    const { search } = useLocation();
    const params = getQueryStringParams(search);
    const searchQuery = params["q"];

    const [searchValue, setSearchValue] = useState(searchQuery || "");
    const history = useHistory();
    const products = useSelector((state) => selectProductsByRestaurantIdAndNameQuery(state, restaurantId, searchQuery));
    
    useEffect(() => {
        if (searchValue) {
            history.replace({
                search: `?q=${searchValue}`
            });
        } else {
            history.replace({
                search: ``
            })
        }
    }, [searchValue, history]);

    if (!products?.length) {
        return <>
            <Search className={styles.searchField} value={searchValue} onChange={setSearchValue}/>
            <div><span>No results</span></div>
        </>
    }
    return (
        <>
            <Search className={styles.searchField} value={searchValue} onChange={setSearchValue}/>
            <Menu menu={products}/>
        </>
    )
}