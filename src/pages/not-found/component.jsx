import { Link } from "react-router-dom"
import { paths } from "../../test-routing"
import styles from "./styles.module.css"
import React from 'react';

export const NotFound = () => {
    return <div className={styles.root}>
        <span>такой страницы нет</span>
        <Link to={paths.restaurants.restaurantList}>а вот такая есть</Link>
    </div>
}