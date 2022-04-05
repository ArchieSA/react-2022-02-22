import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { Restaurant } from "./component"
import { selectRestaurantsById } from '../../modules/restaurants/selectors'
import React from 'react';

export const RestaurantContainer = () => {
    const { id } = useParams();
    
    const restaurant = useSelector((state) => selectRestaurantsById(state, id));

    return <Restaurant restaurant={restaurant}/>
}