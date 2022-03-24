import { normalizedProducts } from '../../fixtures'

export const productReducer = (state = normalizedProducts, action) => {
    switch (action.type) {
        default:
            return state;
    }
}