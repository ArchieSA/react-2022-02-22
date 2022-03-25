import { useSelector } from 'react-redux';
import { selectProductById } from '../../modules/selectors/product-selectors';
import { selectProductCountById } from '../../modules/selectors/basket-selectors';
import {BasketItem} from "./component";

export const BasketItemContainer = ({ productId }) => {
    const product = useSelector(state => selectProductById(state, productId))
    const count = useSelector(state => selectProductCountById(state, productId))

    return (
        <BasketItem product={product} count={count} />
    );
};